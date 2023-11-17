'use strict';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(5)
const adminPass = bcrypt.hashSync('1234', salt)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email:'admin@mail.com',
      phone: '081734562345',
      password: adminPass,
      is_active: true,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'user',
      email:'user@mail.com',
      phone: '081754342344',
      password: adminPass,
      is_active: true,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
