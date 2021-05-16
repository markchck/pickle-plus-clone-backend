'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'markchck',
      password: '1111!',
      email: '1@1',
      createdAt: '2021-5-16',
      updatedAt: '2021-5-16'
    },
    {
      name: 'chuckmark',
      password: '1111',
      email: '1@1',
      createdAt: '2021-5-16',
      updatedAt: '2021-5-16'
    },
    {
      name: 'makomako',
      password: '1111',
      email: '1@1',
      createdAt: '2021-5-16',
      updatedAt: '2021-5-16'
    }]
    ,{});
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
