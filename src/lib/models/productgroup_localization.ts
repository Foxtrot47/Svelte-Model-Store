import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { productgroup, productgroupId } from './productgroup';

export interface productgroup_localizationAttributes {
  ProductGroupLocalizationID: number;
  ProductGroupID: number;
  LocalizationID?: number;
  ProductGroupName: string;
  ShortDescription?: string;
  LongDescription?: string;
}

export type productgroup_localizationPk = "ProductGroupLocalizationID";
export type productgroup_localizationId = productgroup_localization[productgroup_localizationPk];
export type productgroup_localizationOptionalAttributes = "ProductGroupLocalizationID" | "LocalizationID" | "ShortDescription" | "LongDescription";
export type productgroup_localizationCreationAttributes = Optional<productgroup_localizationAttributes, productgroup_localizationOptionalAttributes>;

export class productgroup_localization extends Model<productgroup_localizationAttributes, productgroup_localizationCreationAttributes> implements productgroup_localizationAttributes {
  ProductGroupLocalizationID!: number;
  ProductGroupID!: number;
  LocalizationID?: number;
  ProductGroupName!: string;
  ShortDescription?: string;
  LongDescription?: string;

  // productgroup_localization belongsTo productgroup via ProductGroupID
  ProductGroup!: productgroup;
  getProductGroup!: Sequelize.BelongsToGetAssociationMixin<productgroup>;
  setProductGroup!: Sequelize.BelongsToSetAssociationMixin<productgroup, productgroupId>;
  createProductGroup!: Sequelize.BelongsToCreateAssociationMixin<productgroup>;

  static initModel(sequelize: Sequelize.Sequelize): typeof productgroup_localization {
    return productgroup_localization.init({
    ProductGroupLocalizationID: {
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
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProductGroupName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ShortDescription: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LongDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productgroup_localization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductGroupLocalizationID" },
        ]
      },
      {
        name: "productgroup_localization_FK",
        using: "BTREE",
        fields: [
          { name: "ProductGroupID" },
        ]
      },
    ]
  });
  }
}
