import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { productgroup_localization, productgroup_localizationId } from './productgroup_localization';
import type { productgroupmembership, productgroupmembershipId } from './productgroupmembership';

export interface productgroupAttributes {
  ProductGroupID: number;
  ParentGroupID?: number;
  DisplayOrder?: number;
  CreatedDate: Date;
  ModifiedDate: Date;
  StatusID: number;
  CustomURL?: string;
  ProductGroupType?: number;
  ProductGroupImageURL?: string;
}

export type productgroupPk = "ProductGroupID";
export type productgroupId = productgroup[productgroupPk];
export type productgroupOptionalAttributes = "ProductGroupID" | "ParentGroupID" | "DisplayOrder" | "CreatedDate" | "ModifiedDate" | "StatusID" | "CustomURL" | "ProductGroupType" | "ProductGroupImageURL";
export type productgroupCreationAttributes = Optional<productgroupAttributes, productgroupOptionalAttributes>;

export class productgroup extends Model<productgroupAttributes, productgroupCreationAttributes> implements productgroupAttributes {
  ProductGroupID!: number;
  ParentGroupID?: number;
  DisplayOrder?: number;
  CreatedDate!: Date;
  ModifiedDate!: Date;
  StatusID!: number;
  CustomURL?: string;
  ProductGroupType?: number;
  ProductGroupImageURL?: string;

  // productgroup hasMany productgroup_localization via ProductGroupID
  productgroup_localizations!: productgroup_localization[];
  getProductgroup_localizations!: Sequelize.HasManyGetAssociationsMixin<productgroup_localization>;
  setProductgroup_localizations!: Sequelize.HasManySetAssociationsMixin<productgroup_localization, productgroup_localizationId>;
  addProductgroup_localization!: Sequelize.HasManyAddAssociationMixin<productgroup_localization, productgroup_localizationId>;
  addProductgroup_localizations!: Sequelize.HasManyAddAssociationsMixin<productgroup_localization, productgroup_localizationId>;
  createProductgroup_localization!: Sequelize.HasManyCreateAssociationMixin<productgroup_localization>;
  removeProductgroup_localization!: Sequelize.HasManyRemoveAssociationMixin<productgroup_localization, productgroup_localizationId>;
  removeProductgroup_localizations!: Sequelize.HasManyRemoveAssociationsMixin<productgroup_localization, productgroup_localizationId>;
  hasProductgroup_localization!: Sequelize.HasManyHasAssociationMixin<productgroup_localization, productgroup_localizationId>;
  hasProductgroup_localizations!: Sequelize.HasManyHasAssociationsMixin<productgroup_localization, productgroup_localizationId>;
  countProductgroup_localizations!: Sequelize.HasManyCountAssociationsMixin;
  // productgroup hasMany productgroupmembership via ProductGroupID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof productgroup {
    return productgroup.init({
    ProductGroupID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParentGroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DisplayOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
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
      allowNull: false,
      defaultValue: 1
    },
    CustomURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ProductGroupType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    ProductGroupImageURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productgroup',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductGroupID" },
        ]
      },
    ]
  });
  }
}
