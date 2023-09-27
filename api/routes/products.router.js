const express = require('express');
const router = express.Router();
const ProductsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/product.schema');
const service = new ProductsService();
/*
  GET
  Recibe información del servidor,
  se puede limitar la cantidad de información
  que se muestre al usuario
  - send: envia el mensaje en formato texto
  - json: envia el mensaje en formato JSON
  Todas las rutas que son fijas ('/') deben ir por encima
  de las rutas dinamicas ('/:') para evitar conflictos.
  Se pueden recibir la cantidad necesaria de parametros,
  los parametros son identificados con /:id (puede ser cualquier nombre).

  POST
  Envia información al servidor desde la keyword 'data' y enviamos un
  mensaje con la keyword 'message'.

  PUT y PATCH
  PUT actualiza todo el documento y necesita que todos los elementos
  esten contenidos en la información, mientras que PATCH solo cambia los elementos
  signados.
  Necesita paranetros para poder funcionar.

  DELETE
  Elimina la información en el servidor.
  Necesita paranetros para poder funcionar.
*/

// Already
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

// Already
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// Already
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Already
router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Already
router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const answer = await service.delete(id);
      res.json(answer);
      res.json({
        message: 'deleted',
        id,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
