'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bank.init({
    fk_user_id: DataTypes.INTEGER,
    bank_name: DataTypes.STRING,
    bank_account: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bank',
  });
  return Bank;
};