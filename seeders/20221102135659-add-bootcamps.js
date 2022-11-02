'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', [
      {
      name: 'PHP Bootcamp',
      description: 'Bootcamp for PHP learning',
      phone: '(+57) 320-444-555',
      average_rating: 3,
      average_cost: 4500,
      user_id: 1
    },
    {
      name: 'Express Backend',
      description: 'Bootcamp for JavaScript learning',
      phone: '(+57) 320-444-555',
      average_rating: 3,
      average_cost: 4500,
      user_id: 2
    },
    {
      name: 'CSS ',
      description: 'Bootcamp for CSS learning',
      phone:'(+57) 320-444-555',
      average_rating: 4,
      average_cost: 3500,
      user_id: 3
    }
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
