const { Sequelize, DataTypes, Model } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model');

const ORDER_TABLE = 'order';

const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  orderStatus: {
    field: 'order_status',
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderDetail: {
    field: 'order_detail',
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    field: 'payment_method',
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
  customerId: {
    field: 'customer_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.items) {
        return this.items.reduce(
          (total, item) => total + item.price * item.OrderProduct.amount,
          0
        );
      }
      return 0;
    },
  },
};

class Order extends Model {
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'customer',
    });
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false,
    };
  }
}

module.exports = { ORDER_TABLE, OrderSchema, Order };
