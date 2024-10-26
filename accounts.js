const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Account = sequelize.define('Account', {
  balance: { type: DataTypes.DECIMAL(10, 2), allowNull: false, defaultValue: 0.00 }
});

Account.associate = models => {
  Account.belongsTo(models.User, { foreignKey: 'userId' });
};

module.exports = Account;
