const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { User } = require('../db/models/user.model');

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user'],
    });
    return newCustomer;
  }

  async find() {
    const allCustomer = await models.Customer.findAll({
      include: ['user'],
    });
    return allCustomer;
  }

  async findOne(id) {
    const customerById = await models.Customer.findByPk(id, {
      include: ['user'],
    });
    if (!customerById) {
      throw boom.notFound('User not found');
    }
    return customerById;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const user = await User.findByPk(customer.userId);
    await user.update(changes.user);
    const customerUpdated = await customer.update(changes);
    return customerUpdated;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }
}

module.exports = CustomerService;
