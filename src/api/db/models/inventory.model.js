const { Sequelize, DataTypes, Model } = require('sequelize');

const INVENTORY_TABLE = 'inventories';

const InventorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  monthInventory: {
    field: 'month_inventory',
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearInventory: {
    field: 'year_inventory',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  supervisior: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
};

class Inventory extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: INVENTORY_TABLE,
      modelName: 'Inventory',
      timestamps: false,
    };
  }
}

module.exports = { INVENTORY_TABLE, InventorySchema, Inventory };
