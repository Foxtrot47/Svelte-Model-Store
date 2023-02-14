import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ordersAttributes {
  OrderID: number;
  CreatedDate: Date;
  ModifiedDate?: Date;
  SubTotal: number;
  TaxAmount?: number;
  DiscountTotal: number;
  BillAmount: number;
  DeliveryAddressID: number;
  DeliveryType: number;
  PaymentType: number;
  OrderGUID?: string;
}

export type ordersPk = "OrderID";
export type ordersId = orders[ordersPk];
export type ordersOptionalAttributes = "OrderID" | "CreatedDate" | "ModifiedDate" | "SubTotal" | "TaxAmount" | "DiscountTotal" | "BillAmount" | "OrderGUID";
export type ordersCreationAttributes = Optional<ordersAttributes, ordersOptionalAttributes>;

export class orders extends Model<ordersAttributes, ordersCreationAttributes> implements ordersAttributes {
  OrderID!: number;
  CreatedDate!: Date;
  ModifiedDate?: Date;
  SubTotal!: number;
  TaxAmount?: number;
  DiscountTotal!: number;
  BillAmount!: number;
  DeliveryAddressID!: number;
  DeliveryType!: number;
  PaymentType!: number;
  OrderGUID?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof orders {
    return orders.init({
    OrderID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    SubTotal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    TaxAmount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    DiscountTotal: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    BillAmount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    DeliveryAddressID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    DeliveryType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PaymentType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OrderGUID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderID" },
        ]
      },
    ]
  });
  }
}
