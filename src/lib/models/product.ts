import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product_localization, product_localizationId } from './product_localization';
import type { productgroupmembership, productgroupmembershipId } from './productgroupmembership';
import type { productimages, productimagesId } from './productimages';
import type { productprice, productpriceId } from './productprice';
import type { productproperty, productpropertyId } from './productproperty';
import type { productpropertyvalue_localization, productpropertyvalue_localizationId } from './productpropertyvalue_localization';

export interface productAttributes {
  ProductID: number;
  CreatedDate: Date;
  ModifiedDate: Date;
  StatusID?: number;
  ManufacturerID?: number;
}

export type productPk = "ProductID";
export type productId = product[productPk];
export type productOptionalAttributes = "ProductID" | "CreatedDate" | "ModifiedDate" | "StatusID" | "ManufacturerID";
export type productCreationAttributes = Optional<productAttributes, productOptionalAttributes>;

export class product extends Model<productAttributes, productCreationAttributes> implements productAttributes {
  ProductID!: number;
  CreatedDate!: Date;
  ModifiedDate!: Date;
  StatusID?: number;
  ManufacturerID?: number;

  // product hasMany product_localization via ProductID
  product_localizations!: product_localization[];
  getProduct_localizations!: Sequelize.HasManyGetAssociationsMixin<product_localization>;
  setProduct_localizations!: Sequelize.HasManySetAssociationsMixin<product_localization, product_localizationId>;
  addProduct_localization!: Sequelize.HasManyAddAssociationMixin<product_localization, product_localizationId>;
  addProduct_localizations!: Sequelize.HasManyAddAssociationsMixin<product_localization, product_localizationId>;
  createProduct_localization!: Sequelize.HasManyCreateAssociationMixin<product_localization>;
  removeProduct_localization!: Sequelize.HasManyRemoveAssociationMixin<product_localization, product_localizationId>;
  removeProduct_localizations!: Sequelize.HasManyRemoveAssociationsMixin<product_localization, product_localizationId>;
  hasProduct_localization!: Sequelize.HasManyHasAssociationMixin<product_localization, product_localizationId>;
  hasProduct_localizations!: Sequelize.HasManyHasAssociationsMixin<product_localization, product_localizationId>;
  countProduct_localizations!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany productgroupmembership via ProductID
  productgroupmemberships!: productgroupmembership[];
  getProductgroupmemberships!: Sequelize.HasManyGetAssociationsMixin<productgroupmembership>;
  setProductgroupmemberships!: Sequelize.HasManySetAssociationsMixin<productgroupmembership, productgroupmembershipId>;
  addProductgroupmembership!: Sequelize.HasManyAddAssociationMixin<productgroupmembership, productgroupmembershipId>;
  addProductgroupmemberships!: Sequelize.HasManyAddAssociationsMixin<productgroupmembership, productgroupmembershipId>;
  createProductgroupmembership!: Sequelize.HasManyCreateAssociationMixin<productgroupmembership>;
  removeProductgroupmembership!: Sequelize.HasManyRemoveAssociationMixin<productgroupmembership, productgroupmembershipId>;
  removeProductgroupmemberships!: Sequelize.HasManyRemoveAssociationsMixin<productgroupmembership, productgroupmembershipId>;
  hasProductgroupmembership!: Sequelize.HasManyHasAssociationMixin<productgroupmembership, productgroupmembershipId>;
  hasProductgroupmemberships!: Sequelize.HasManyHasAssociationsMixin<productgroupmembership, productgroupmembershipId>;
  countProductgroupmemberships!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany productimages via ProductID
  productimages!: productimages[];
  getProductimages!: Sequelize.HasManyGetAssociationsMixin<productimages>;
  setProductimages!: Sequelize.HasManySetAssociationsMixin<productimages, productimagesId>;
  addProductimage!: Sequelize.HasManyAddAssociationMixin<productimages, productimagesId>;
  addProductimages!: Sequelize.HasManyAddAssociationsMixin<productimages, productimagesId>;
  createProductimage!: Sequelize.HasManyCreateAssociationMixin<productimages>;
  removeProductimage!: Sequelize.HasManyRemoveAssociationMixin<productimages, productimagesId>;
  removeProductimages!: Sequelize.HasManyRemoveAssociationsMixin<productimages, productimagesId>;
  hasProductimage!: Sequelize.HasManyHasAssociationMixin<productimages, productimagesId>;
  hasProductimages!: Sequelize.HasManyHasAssociationsMixin<productimages, productimagesId>;
  countProductimages!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany productprice via ProductID
  productprices!: productprice[];
  getProductprices!: Sequelize.HasManyGetAssociationsMixin<productprice>;
  setProductprices!: Sequelize.HasManySetAssociationsMixin<productprice, productpriceId>;
  addProductprice!: Sequelize.HasManyAddAssociationMixin<productprice, productpriceId>;
  addProductprices!: Sequelize.HasManyAddAssociationsMixin<productprice, productpriceId>;
  createProductprice!: Sequelize.HasManyCreateAssociationMixin<productprice>;
  removeProductprice!: Sequelize.HasManyRemoveAssociationMixin<productprice, productpriceId>;
  removeProductprices!: Sequelize.HasManyRemoveAssociationsMixin<productprice, productpriceId>;
  hasProductprice!: Sequelize.HasManyHasAssociationMixin<productprice, productpriceId>;
  hasProductprices!: Sequelize.HasManyHasAssociationsMixin<productprice, productpriceId>;
  countProductprices!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany productproperty via ProductID
  productproperties!: productproperty[];
  getProductproperties!: Sequelize.HasManyGetAssociationsMixin<productproperty>;
  setProductproperties!: Sequelize.HasManySetAssociationsMixin<productproperty, productpropertyId>;
  addProductproperty!: Sequelize.HasManyAddAssociationMixin<productproperty, productpropertyId>;
  addProductproperties!: Sequelize.HasManyAddAssociationsMixin<productproperty, productpropertyId>;
  createProductproperty!: Sequelize.HasManyCreateAssociationMixin<productproperty>;
  removeProductproperty!: Sequelize.HasManyRemoveAssociationMixin<productproperty, productpropertyId>;
  removeProductproperties!: Sequelize.HasManyRemoveAssociationsMixin<productproperty, productpropertyId>;
  hasProductproperty!: Sequelize.HasManyHasAssociationMixin<productproperty, productpropertyId>;
  hasProductproperties!: Sequelize.HasManyHasAssociationsMixin<productproperty, productpropertyId>;
  countProductproperties!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany productpropertyvalue_localization via ProductID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof product {
    return product.init({
    ProductID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ManufacturerID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
  }
}
