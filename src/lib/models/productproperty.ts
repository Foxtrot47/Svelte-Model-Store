import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';
import type { productproperty_localization, productproperty_localizationId } from './productproperty_localization';
import type { productpropertyvalue_localization, productpropertyvalue_localizationId } from './productpropertyvalue_localization';

export interface productpropertyAttributes {
  PropertyID: number;
  ProductID?: number;
  ProductGroupID?: number;
  IsRequired: number;
  UsedforPriceCalculation: number;
  ParentPropertyID?: number;
  IsParent?: number;
}

export type productpropertyPk = "PropertyID";
export type productpropertyId = productproperty[productpropertyPk];
export type productpropertyOptionalAttributes = "PropertyID" | "ProductID" | "ProductGroupID" | "IsRequired" | "UsedforPriceCalculation" | "ParentPropertyID" | "IsParent";
export type productpropertyCreationAttributes = Optional<productpropertyAttributes, productpropertyOptionalAttributes>;

export class productproperty extends Model<productpropertyAttributes, productpropertyCreationAttributes> implements productpropertyAttributes {
  PropertyID!: number;
  ProductID?: number;
  ProductGroupID?: number;
  IsRequired!: number;
  UsedforPriceCalculation!: number;
  ParentPropertyID?: number;
  IsParent?: number;

  // productproperty belongsTo product via ProductID
  Product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // productproperty hasMany productproperty_localization via ProductPropertyID
  productproperty_localizations!: productproperty_localization[];
  getProductproperty_localizations!: Sequelize.HasManyGetAssociationsMixin<productproperty_localization>;
  setProductproperty_localizations!: Sequelize.HasManySetAssociationsMixin<productproperty_localization, productproperty_localizationId>;
  addProductproperty_localization!: Sequelize.HasManyAddAssociationMixin<productproperty_localization, productproperty_localizationId>;
  addProductproperty_localizations!: Sequelize.HasManyAddAssociationsMixin<productproperty_localization, productproperty_localizationId>;
  createProductproperty_localization!: Sequelize.HasManyCreateAssociationMixin<productproperty_localization>;
  removeProductproperty_localization!: Sequelize.HasManyRemoveAssociationMixin<productproperty_localization, productproperty_localizationId>;
  removeProductproperty_localizations!: Sequelize.HasManyRemoveAssociationsMixin<productproperty_localization, productproperty_localizationId>;
  hasProductproperty_localization!: Sequelize.HasManyHasAssociationMixin<productproperty_localization, productproperty_localizationId>;
  hasProductproperty_localizations!: Sequelize.HasManyHasAssociationsMixin<productproperty_localization, productproperty_localizationId>;
  countProductproperty_localizations!: Sequelize.HasManyCountAssociationsMixin;
  // productproperty hasMany productpropertyvalue_localization via ProductPropertyID
  productpropertyvalue_localizations!: productpropertyvalue_localization[];
  getProductpropertyvalue_localizations!: Sequelize.HasManyGetAssociationsMixin<productpropertyvalue_localization>;
  setProductpropertyvalue_localizations!: Sequelize.HasManySetAssociationsMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  addProductpropertyvalue_localization!: Sequelize.HasManyAddAssociationMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  addProductpropertyvalue_localizations!: Sequelize.HasManyAddAssociationsMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  createProductpropertyvalue_localization!: Sequelize.HasManyCreateAssociationMixin<productpropertyvalue_localization>;
  removeProductpropertyvalue_localization!: Sequelize.HasManyRemoveAssociationMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  removeProductpropertyvalue_localizations!: Sequelize.HasManyRemoveAssociationsMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  hasProductpropertyvalue_localization!: Sequelize.HasManyHasAssociationMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  hasProductpropertyvalue_localizations!: Sequelize.HasManyHasAssociationsMixin<productpropertyvalue_localization, productpropertyvalue_localizationId>;
  countProductpropertyvalue_localizations!: Sequelize.HasManyCountAssociationsMixin;

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
      defaultValue: 0
    },
    UsedforPriceCalculation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ParentPropertyID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsParent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
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
