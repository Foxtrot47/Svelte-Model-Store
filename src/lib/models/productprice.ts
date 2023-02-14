import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface productpriceAttributes {
  ID: number;
  ProductID: number;
  BasePrice: number;
  BaseDiscountPercentage: number;
}

export type productpricePk = "ID";
export type productpriceId = productprice[productpricePk];
export type productpriceOptionalAttributes = "ID";
export type productpriceCreationAttributes = Optional<productpriceAttributes, productpriceOptionalAttributes>;

export class productprice extends Model<productpriceAttributes, productpriceCreationAttributes> implements productpriceAttributes {
  ID!: number;
  ProductID!: number;
  BasePrice!: number;
  BaseDiscountPercentage!: number;

  // productprice belongsTo product via ProductID
  Product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof productprice {
    return productprice.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
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
    BasePrice: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    BaseDiscountPercentage: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productprice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "productprice_FK",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
    ]
  });
  }
}
