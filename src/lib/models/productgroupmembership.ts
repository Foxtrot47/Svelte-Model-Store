import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';
import type { productgroup, productgroupId } from './productgroup';

export interface productgroupmembershipAttributes {
  ID: number;
  ProductGroupID: number;
  ProductID: number;
}

export type productgroupmembershipPk = "ID";
export type productgroupmembershipId = productgroupmembership[productgroupmembershipPk];
export type productgroupmembershipOptionalAttributes = "ID";
export type productgroupmembershipCreationAttributes = Optional<productgroupmembershipAttributes, productgroupmembershipOptionalAttributes>;

export class productgroupmembership extends Model<productgroupmembershipAttributes, productgroupmembershipCreationAttributes> implements productgroupmembershipAttributes {
  ID!: number;
  ProductGroupID!: number;
  ProductID!: number;

  // productgroupmembership belongsTo product via ProductID
  Product!: product;
  getProduct!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // productgroupmembership belongsTo productgroup via ProductGroupID
  ProductGroup!: productgroup;
  getProductGroup!: Sequelize.BelongsToGetAssociationMixin<productgroup>;
  setProductGroup!: Sequelize.BelongsToSetAssociationMixin<productgroup, productgroupId>;
  createProductGroup!: Sequelize.BelongsToCreateAssociationMixin<productgroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof productgroupmembership {
    return productgroupmembership.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductGroupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productgroup',
        key: 'ProductGroupID'
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'ProductID'
      }
    }
  }, {
    sequelize,
    tableName: 'productgroupmembership',
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
        name: "productgroupmembership_FK",
        using: "BTREE",
        fields: [
          { name: "ProductID" },
        ]
      },
      {
        name: "productgroupmembership_FK_1",
        using: "BTREE",
        fields: [
          { name: "ProductGroupID" },
        ]
      },
    ]
  });
  }
}
