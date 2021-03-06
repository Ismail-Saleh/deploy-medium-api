'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      is_published: {
        type: Sequelize.BOOLEAN
      },
      is_archived: {
        type: Sequelize.BOOLEAN
      },
      article_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'articles',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key:'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      comment: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};