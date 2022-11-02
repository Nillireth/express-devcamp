'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
        {
        username: 'Paula Lopez',
        email: 'pnlopez5@misena.edu.co',
        password: '123456'
      },
      {
        username: 'Laura Sanabria',
        email: 'ljsananbria@misena.edu.co',
        password: '67890'
      },
      {
        username: 'Veronica Centeno',
        email: 'verito@misena.edu.co',
        password: '34567'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('users', null, {});

  }
};
