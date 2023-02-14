import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface productproperty_localizationAttributes {
  ProductPropertyLocalizationID: number;
  ProductPropertyID: number;
  LocalizationID: number;
  PropertyName?: string;
}

export type productproperty_localizationPk = "ProductPropertyLocalizationID";
export type productproperty_localizationId = productproperty_localization[productproperty_localizationPk];
export type productproperty_localizationOptionalAttributes = "ProductPropertyLocalizationID" | "PropertyName";
export type productproperty_localizationCreationAttributes = Optional<productproperty_localizationAttributes, productproperty_localizationOptionalAttributes>;

export class productproperty_localization extends Model<productproperty_localizationAttributes, productproperty_localizationCreationAttributes> implements productproperty_localizationAttributes {
  ProductPropertyLocalizationID!: number;
  ProductPropertyID!: number;
  LocalizationID!: number;
  PropertyName?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof productproperty_localization {
    return productproperty_localization.init({
    ProductPropertyLocalizationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductPropertyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PropertyName: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productproperty_localization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductPropertyLocalizationID" },
        ]
      },
    ]
  });
  }
}
