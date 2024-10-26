const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Transaction = sequelize.define('Transaction', {
  type: { type: DataTypes.ENUM('deposit', 'withdrawal'), allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
});

Transaction.associate = models => {
  Transaction.belongsTo(models.Account, { foreignKey: 'accountId' });
};

module.exports = Transaction;
