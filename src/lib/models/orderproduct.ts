import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface orderproductAttributes {
  OrderProductID: number;
  OrderID: number;
  ProductID: number;
  Quantity: number;
  OrderProductStatusID?: number;
  OrderProductPrice: number;
  TrackingID?: string;
  OrderProductGUID: string;
  SellerID: number;
  SupplierID: number;
}

export type orderproductPk = "OrderProductID";
export type orderproductId = orderproduct[orderproductPk];
export type orderproductOptionalAttributes = "OrderProductID" | "Quantity" | "OrderProductStatusID" | "OrderProductPrice" | "TrackingID";
export type orderproductCreationAttributes = Optional<orderproductAttributes, orderproductOptionalAttributes>;

export class orderproduct extends Model<orderproductAttributes, orderproductCreationAttributes> implements orderproductAttributes {
  OrderProductID!: number;
  OrderID!: number;
  ProductID!: number;
  Quantity!: number;
  OrderProductStatusID?: number;
  OrderProductPrice!: number;
  TrackingID?: string;
  OrderProductGUID!: string;
  SellerID!: number;
  SupplierID!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof orderproduct {
    return orderproduct.init({
    OrderProductID: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    OrderID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    ProductID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    OrderProductStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    OrderProductPrice: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    TrackingID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    OrderProductGUID: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    SellerID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    SupplierID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orderproduct',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderProductID" },
        ]
      },
    ]
  });
  }
}
