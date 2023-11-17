'use strict';

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
    await queryInterface.bulkInsert('Products', [
      {
        name: 'perfume 1',
        price: 200000,
        image: 'https://m.media-amazon.com/images/I/61UmyJvtqSL._AC_UF894,1000_QL80_.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 2',
        price: 450000,
        image: 'https://m.media-amazon.com/images/I/614+6kcDXOL.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 3',
        price: 150000,
        image: 'https://shop.dior.com.au/cdn/shop/files/NOTPACKSHOT-LOR.jpg?v=1697748868',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 4',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 5',
        price: 200000,
        image: 'https://m.media-amazon.com/images/I/61UmyJvtqSL._AC_UF894,1000_QL80_.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 6',
        price: 450000,
        image: 'https://m.media-amazon.com/images/I/614+6kcDXOL.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 7',
        price: 150000,
        image: 'https://shop.dior.com.au/cdn/shop/files/NOTPACKSHOT-LOR.jpg?v=1697748868',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 8',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'perfume 9',
        price: 200000,
        image: 'https://m.media-amazon.com/images/I/61UmyJvtqSL._AC_UF894,1000_QL80_.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 10',
        price: 450000,
        image: 'https://m.media-amazon.com/images/I/614+6kcDXOL.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 11',
        price: 150000,
        image: 'https://shop.dior.com.au/cdn/shop/files/NOTPACKSHOT-LOR.jpg?v=1697748868',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 12',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'perfume 13',
        price: 450000,
        image: 'https://m.media-amazon.com/images/I/614+6kcDXOL.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 14',
        price: 150000,
        image: 'https://shop.dior.com.au/cdn/shop/files/NOTPACKSHOT-LOR.jpg?v=1697748868',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 15',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 16',
        price: 200000,
        image: 'https://m.media-amazon.com/images/I/61UmyJvtqSL._AC_UF894,1000_QL80_.jpg',
        is_active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 17',
        price: 450000,
        image: 'https://m.media-amazon.com/images/I/614+6kcDXOL.jpg',
        is_active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 18',
        price: 150000,
        image: 'https://shop.dior.com.au/cdn/shop/files/NOTPACKSHOT-LOR.jpg?v=1697748868',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 19',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'perfume 20',
        price: 200000,
        image: 'https://m.media-amazon.com/images/I/61UmyJvtqSL._AC_UF894,1000_QL80_.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 21',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 22',
        price: 200000,
        image: 'https://m.media-amazon.com/images/I/61UmyJvtqSL._AC_UF894,1000_QL80_.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 23',
        price: 450000,
        image: 'https://m.media-amazon.com/images/I/614+6kcDXOL.jpg',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 24',
        price: 150000,
        image: 'https://shop.dior.com.au/cdn/shop/files/NOTPACKSHOT-LOR.jpg?v=1697748868',
        is_active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'perfume 25',
        price: 150000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mA-92i-tp4oSDF3w-CcL_KA8RRbIwfokmQ&usqp=CAU',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
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
