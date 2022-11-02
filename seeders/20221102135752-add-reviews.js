'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        title: 'PHP',
        text: 'Bootcamp for PHP learning',
        rating: 5,
        bootcamp_id: 1,
        user_id: 1
      },
      {
        title: 'JAVA',
        text: 'Bootcamp for JAVA learning',
        rating: 6,
        bootcamp_id: 2,
        user_id: 2
      },
      {
        title: 'CSS',
        text: 'Bootcamp for CSS learning',
        rating: 7,
        bootcamp_id: 3,
        user_id: 3
      },
      {
        title: 'JAVASCRIPT',
        text: 'Bootcamp for JAVASCRIPT learning',
        rating: 2,
        bootcamp_id: 1,
        user_id: 1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
