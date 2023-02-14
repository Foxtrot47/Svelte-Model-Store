import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface product_localizationAttributes {
  ProductLocalizationID: number;
  ProductID: number;
  LocalizationID: number;
  ProductName: string;
  ShortDescription?: string;
  DisplayName: string;
  URL: string;
}

export type product_localizationPk = "ProductLocalizationID";
export type product_localizationId = product_localization[product_localizationPk];
export type product_localizationOptionalAttributes = "ProductLocalizationID" | "ShortDescription";
export type product_localizationCreationAttributes = Optional<product_localizationAttributes, product_localizationOptionalAttributes>;

export class product_localization extends Model<product_localizationAttributes, product_localizationCreationAttributes> implements product_localizationAttributes {
  ProductLocalizationID!: number;
  ProductID!: number;
  LocalizationID!: number;
  ProductName!: string;
  ShortDescription?: string;
  DisplayName!: string;
  URL!: string;

  // product_localization belongsTo product via ProductID
  Product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof product_localization {
    return product_localization.init({
    ProductLocalizationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'ProductID'
      }
    },
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProductName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ShortDescription: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DisplayName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product_localization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductLocalizationID" },
        ]
      },
      {
        name: "product_localization_FK",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
  }
}
