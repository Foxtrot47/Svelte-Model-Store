import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { productproperty, productpropertyId } from './productproperty';

export interface productpropertyvalue_localizationAttributes {
  ProductPropertyValueID: number;
  ProductPropertyID: number;
  ProductPropertyValue: string;
  LocalizationID?: number;
}

export type productpropertyvalue_localizationPk = "ProductPropertyValueID";
export type productpropertyvalue_localizationId = productpropertyvalue_localization[productpropertyvalue_localizationPk];
export type productpropertyvalue_localizationOptionalAttributes = "ProductPropertyValueID" | "LocalizationID";
export type productpropertyvalue_localizationCreationAttributes = Optional<productpropertyvalue_localizationAttributes, productpropertyvalue_localizationOptionalAttributes>;

export class productpropertyvalue_localization extends Model<productpropertyvalue_localizationAttributes, productpropertyvalue_localizationCreationAttributes> implements productpropertyvalue_localizationAttributes {
  ProductPropertyValueID!: number;
  ProductPropertyID!: number;
  ProductPropertyValue!: string;
  LocalizationID?: number;

  // productpropertyvalue_localization belongsTo productproperty via ProductPropertyID
  ProductProperty!: productproperty;
  getProductProperty!: Sequelize.BelongsToGetAssociationMixin<productproperty>;
  setProductProperty!: Sequelize.BelongsToSetAssociationMixin<productproperty, productpropertyId>;
  createProductProperty!: Sequelize.BelongsToCreateAssociationMixin<productproperty>;

  static initModel(sequelize: Sequelize.Sequelize): typeof productpropertyvalue_localization {
    return productpropertyvalue_localization.init({
    ProductPropertyValueID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductPropertyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productproperty',
        key: 'PropertyID'
      }
    },
    ProductPropertyValue: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productpropertyvalue_localization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductPropertyValueID" },
        ]
      },
      {
        name: "productpropertyvalue_localization_FK",
        using: "BTREE",
        fields: [
          { name: "ProductPropertyID" },
        ]
      },
    ]
  });
  }
}
