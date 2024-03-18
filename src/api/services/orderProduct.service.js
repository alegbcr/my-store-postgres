const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class OrderProductService {
  constructor() {}

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

module.exports = OrderProductService;
