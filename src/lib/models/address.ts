import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface addressAttributes {
  AddressID: number;
  AddressTypeID?: number;
  CustomerID: number;
  DisplayOrder?: number;
  Address1?: string;
  Address2?: string;
  City?: string;
  State?: number;
  Zip?: string;
  Phone?: string;
  Country?: number;
  PersonName?: string;
  Company?: string;
  DisplayName?: string;
  IsDefault: boolean;
  StatusID: number;
  UserGroupId?: number;
  AddressReference?: string;
  TaxRegistration?: string;
  Email?: string;
  UserID: number;
  ModifiedFromOrderID?: number;
  AddressUniqueID: string;
}

export type addressPk = "AddressID";
export type addressId = address[addressPk];
export type addressOptionalAttributes = "AddressID" | "AddressTypeID" | "DisplayOrder" | "Address1" | "Address2" | "City" | "State" | "Zip" | "Phone" | "Country" | "PersonName" | "Company" | "DisplayName" | "IsDefault" | "StatusID" | "UserGroupId" | "AddressReference" | "TaxRegistration" | "Email" | "ModifiedFromOrderID";
export type addressCreationAttributes = Optional<addressAttributes, addressOptionalAttributes>;

export class address extends Model<addressAttributes, addressCreationAttributes> implements addressAttributes {
  AddressID!: number;
  AddressTypeID?: number;
  CustomerID!: number;
  DisplayOrder?: number;
  Address1?: string;
  Address2?: string;
  City?: string;
  State?: number;
  Zip?: string;
  Phone?: string;
  Country?: number;
  PersonName?: string;
  Company?: string;
  DisplayName?: string;
  IsDefault!: boolean;
  StatusID!: number;
  UserGroupId?: number;
  AddressReference?: string;
  TaxRegistration?: string;
  Email?: string;
  UserID!: number;
  ModifiedFromOrderID?: number;
  AddressUniqueID!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof address {
    return address.init({
    AddressID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    AddressTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    State: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Zip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Country: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PersonName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Company: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DisplayName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    IsDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    UserGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddressReference: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TaxRegistration: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ModifiedFromOrderID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AddressUniqueID: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'address',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AddressID" },
        ]
      },
    ]
  });
  }
}
