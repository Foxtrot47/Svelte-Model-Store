import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface localizationAttributes {
  LocalizationID: number;
  LocalizationValue: string;
  StatusID: number;
  FallBackLocalizationID: number;
  IsDefaultLocalization: number;
  LocalizationName: string;
}

export type localizationPk = "LocalizationID";
export type localizationId = localization[localizationPk];
export type localizationOptionalAttributes = "LocalizationID" | "StatusID" | "IsDefaultLocalization";
export type localizationCreationAttributes = Optional<localizationAttributes, localizationOptionalAttributes>;

export class localization extends Model<localizationAttributes, localizationCreationAttributes> implements localizationAttributes {
  LocalizationID!: number;
  LocalizationValue!: string;
  StatusID!: number;
  FallBackLocalizationID!: number;
  IsDefaultLocalization!: number;
  LocalizationName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof localization {
    return localization.init({
    LocalizationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocalizationValue: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    FallBackLocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsDefaultLocalization: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    LocalizationName: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'localization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LocalizationID" },
        ]
      },
    ]
  });
  }
}
