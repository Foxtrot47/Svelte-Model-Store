import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface productimagesAttributes {
  ImageID: number;
  ProductID: number;
  ProductImageID: number;
  ImageSizePx: string;
  ImageUrl: string;
  ImageOrder?: number;
}

export type productimagesPk = "ImageID";
export type productimagesId = productimages[productimagesPk];
export type productimagesOptionalAttributes = "ImageID" | "ImageOrder";
export type productimagesCreationAttributes = Optional<productimagesAttributes, productimagesOptionalAttributes>;

export class productimages extends Model<productimagesAttributes, productimagesCreationAttributes> implements productimagesAttributes {
  ImageID!: number;
  ProductID!: number;
  ProductImageID!: number;
  ImageSizePx!: string;
  ImageUrl!: string;
  ImageOrder?: number;

  // productimages belongsTo product via ProductID
  Product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof productimages {
    return productimages.init({
    ImageID: {
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
    ProductImageID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "ProductImageID_UNIQUE"
    },
    ImageSizePx: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ImageUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ImageOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'productimages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ImageID" },
        ]
      },
      {
        name: "ProductImageID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductImageID" },
        ]
      },
      {
        name: "FK_ProductID_idx",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
  }
}
