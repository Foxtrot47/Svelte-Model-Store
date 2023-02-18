import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sellersAttributes {
  SellerID: number;
  SellerType: number;
  CreatedDate: Date;
  ModifiedDate: Date;
  SellerGUID?: string;
  StatusID: number;
  Email: string;
  FirstName: string;
  LastName?: string;
  Password?: string;
  MobileNumber: string;
  PasswordCreatedDate?: Date;
  IsLocked: number;
  ActivationToken?: string;
  DefaultLocalization: number;
}

export type sellersPk = "SellerID";
export type sellersId = sellers[sellersPk];
export type sellersOptionalAttributes = "SellerID" | "SellerType" | "CreatedDate" | "ModifiedDate" | "SellerGUID" | "StatusID" | "LastName" | "Password" | "PasswordCreatedDate" | "IsLocked" | "ActivationToken" | "DefaultLocalization";
export type sellersCreationAttributes = Optional<sellersAttributes, sellersOptionalAttributes>;

export class sellers extends Model<sellersAttributes, sellersCreationAttributes> implements sellersAttributes {
  SellerID!: number;
  SellerType!: number;
  CreatedDate!: Date;
  ModifiedDate!: Date;
  SellerGUID?: string;
  StatusID!: number;
  Email!: string;
  FirstName!: string;
  LastName?: string;
  Password?: string;
  MobileNumber!: string;
  PasswordCreatedDate?: Date;
  IsLocked!: number;
  ActivationToken?: string;
  DefaultLocalization!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof sellers {
    return sellers.init({
    SellerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SellerType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    SellerGUID: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    PasswordCreatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ActivationToken: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DefaultLocalization: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'sellers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SellerID" },
        ]
      },
    ]
  });
  }
}
