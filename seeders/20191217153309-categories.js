'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('categories', 
      [
        {
          name: 'Programing',
          is_published : 1,
          is_archived : 0, 
        },
        {
          name: 'Sport',
          is_published : 1,
          is_archived : 0, 
        },
        {
          name: 'Cooking',
          is_published : 1,
          is_archived : 0, 
        }
    ],
    {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
