import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface transactiondetailsAttributes {
  TransactionID: number;
  TransactionType?: number;
  TransactionName?: string;
  TransactionAmount?: number;
  PaymentGateway?: string;
}

export type transactiondetailsPk = "TransactionID";
export type transactiondetailsId = transactiondetails[transactiondetailsPk];
export type transactiondetailsOptionalAttributes = "TransactionID" | "TransactionType" | "TransactionName" | "TransactionAmount" | "PaymentGateway";
export type transactiondetailsCreationAttributes = Optional<transactiondetailsAttributes, transactiondetailsOptionalAttributes>;

export class transactiondetails extends Model<transactiondetailsAttributes, transactiondetailsCreationAttributes> implements transactiondetailsAttributes {
  TransactionID!: number;
  TransactionType?: number;
  TransactionName?: string;
  TransactionAmount?: number;
  PaymentGateway?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof transactiondetails {
    return transactiondetails.init({
    TransactionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TransactionType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TransactionName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TransactionAmount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    PaymentGateway: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transactiondetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TransactionID" },
        ]
      },
    ]
  });
  }
}
