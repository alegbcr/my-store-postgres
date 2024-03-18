const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsersService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const allUsers = await models.User.findAll({
      include: ['customer'],
    });
    return allUsers;
  }

  async findOne(id) {
    const userById = await models.User.findByPk(id, {
      include: ['customer'],
    });
    if (!userById) {
      throw boom.notFound('User not found');
    }
    return userById;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const userUpdated = await user.update(changes);
    return userUpdated;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UsersService;
