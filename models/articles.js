'use strict';
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define('articles', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    // category_name: DataTypes.STRING,
    is_publish: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    // slug: DataTypes.STRING,
    author_id: DataTypes.INTEGER
  }, {});
  articles.associate = function (models) {
    // associations can be defined here
      articles.belongsTo(models.user, {
        as: 'users',
        foreignKey: 'author_id'
    },  
      articles.belongsTo(models.categories, {
        as: 'categoriesId',
        foreignKey: 'category_id'
    },
    articles.hasMany(models.comment, {
      as: 'commentArticle',
      foreignKey: 'article_id'
    })
      ),
    
    )


  };
  return articles;
};