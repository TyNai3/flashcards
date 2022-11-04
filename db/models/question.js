const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Question.belongsTo(Topic, { foreignKey: 'topic_id' });
      // define association here
    }
  }
  Question.init({
    name: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    topic_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
