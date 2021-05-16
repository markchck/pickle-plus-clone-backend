'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Party.init({
    fk_user_id: DataTypes.INTEGER,
    party_type: DataTypes.INTEGER,
    party_id: DataTypes.STRING,
    party_password: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};