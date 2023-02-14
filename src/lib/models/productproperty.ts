import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface productpropertyAttributes {
  PropertyID: number;
  ProductID?: number;
  ProductGroupID?: number;
  IsRequired: boolean;
  UsedforPriceCalculation: boolean;
  ParentPropertyID?: number;
  IsParent?: boolean;
}

export type productpropertyPk = "PropertyID";
export type productpropertyId = productproperty[productpropertyPk];
export type productpropertyOptionalAttributes = "PropertyID" | "ProductID" | "ProductGroupID" | "IsRequired" | "UsedforPriceCalculation" | "ParentPropertyID" | "IsParent";
export type productpropertyCreationAttributes = Optional<productpropertyAttributes, productpropertyOptionalAttributes>;

export class productproperty extends Model<productpropertyAttributes, productpropertyCreationAttributes> implements productpropertyAttributes {
  PropertyID!: number;
  ProductID?: number;
  ProductGroupID?: number;
  IsRequired!: boolean;
  UsedforPriceCalculation!: boolean;
  ParentPropertyID?: number;
  IsParent?: boolean;

  // productproperty belongsTo product via ProductID
  Product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof productproperty {
    return productproperty.init({
    PropertyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'ProductID'
      }
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    UsedforPriceCalculation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ParentPropertyID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsParent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'productproperty',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PropertyID" },
        ]
      },
      {
        name: "productproperty_FK",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
  }
}
