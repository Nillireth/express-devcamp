'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'php',
        description:'Bootcamp for PHP learning',
        weeks:4,
        enroll_cost:4000,
        minimun_skill:'',
        bootcamp_id:1
      },
      {
        title: 'java',
        description:'Bootcamp for JavaScript learning',
        weeks:5,
        enroll_cost:3500,
        minimun_skill:'',
        bootcamp_id:2
      },
      {
        title: 'css',
        description:'Bootcamp for CSS learning',
        weeks:4,
        enroll_cost:2500,
        minimun_skill:'',
        bootcamp_id:3
      },
      {
        title: 'JAVASCRIPT',
        description:'Bootcamp for JAVASCRIPT learning',
        weeks:4,
        enroll_cost:2500,
        minimun_skill:'',
        bootcamp_id:1
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('courses', null, {});
  }
};
