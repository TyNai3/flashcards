const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      Topic.hasMany(Question, { foreignKey: 'topic_id' });

      // define association here
    }
  }
  Topic.init({
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};
