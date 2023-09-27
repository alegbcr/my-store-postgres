const express = require('express');
const router = express.Router();

const { categoriesData } = require('../data');

router.get('/', (req, res) => {
  const categories = categoriesData;
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { categoryId } = req.params;
  if (categoryId === '999') {
    res.status(404).json({
      massage: 'Not Found',
    });
  } else {
    res.status(200).json({
      categoryId,
      name: 'category1',
    });
  }
});

module.exports = router;
