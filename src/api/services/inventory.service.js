// const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class InventoryService {
  constructor() {}

  async create(data) {
    const newInventory = await models.Inventory.create(data);
    return newInventory;
  }

  async find() {
    const allInventory = await models.Inventory.findAll({
      include: ['products'],
    });
    return allInventory;
  }

  // async findOne(id) {
  //   const inventory = await models.Inventory.findByPk(id);
  //   if (!inventory) {
  //     throw boom.notFound('Category not found');
  //   }
  //   return inventory;
  // }

  // async update(id, changes) {
  //   const category = await this.findOne(id);
  //   const categoryUpdated = await category.update(changes);
  //   return categoryUpdated;
  // }

  // async delete(id) {
  //   const category = await this.findOne(id);
  //   await category.destroy();
  //   return { id };
  // }
}

module.exports = InventoryService;
