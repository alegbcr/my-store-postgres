const { usersData } = require('../data');
const boom = require('@hapi/boom');

// Faker Dependecy
const { faker } = require('@faker-js/faker');

class UsersService {
  constructor() {
    this.users = usersData;
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.users[index];
    this.users[index] = { ...user, ...changes };
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersService;
