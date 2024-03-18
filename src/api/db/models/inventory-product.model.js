const { DataTypes, Model } = require('sequelize');
const { PRODUCT_TABLE } = require('./product.model');
const { INVENTORY_TABLE } = require('./inventory.model');

const INVENTORY_PRODUCT_TABLE = 'inventory_products';

const InventoryProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  inventoryId: {
    field: 'inventory_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: INVENTORY_TABLE,
      key: 'id',
    },
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id',
    },
  },
};

class InventoryProduct extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVENTORY_PRODUCT_TABLE,
      modelName: 'InventoryProduct',
      timestamps: false,
    };
  }
}

module.exports = {
  INVENTORY_PRODUCT_TABLE,
  InventoryProductSchema,
  InventoryProduct,
};
