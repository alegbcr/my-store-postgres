const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const allOrder = await models.Order.findAll();
    return allOrder;
  }

  async findOne(id) {
    const orderById = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        {
          association: 'items',
        },
      ],
    });
    if (!orderById) {
      throw boom.notFound('User not found');
    }
    return orderById;
  }

  async update(id, changes) {
    const order = await this.findOne(id);
    const orderUpdated = await order.update(changes);
    return orderUpdated;
  }

  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
    return { id };
  }

  /* Items Functions */
  async findItem(id) {
    const order = await models.OrderProduct.findByPk(id);
    if (!order) {
      throw boom.notFound('item not found');
    }
    return order;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async updateItem(id, changes) {
    const item = await this.findItem(id);
    const itemUpdated = await item.update(changes);
    return itemUpdated;
  }

  async deleteItem(id) {
    const item = await this.findItem(id);
    await item.destroy();
    return { id };
  }
}

module.exports = OrderService;
