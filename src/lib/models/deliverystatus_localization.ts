import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface deliverystatus_localizationAttributes {
  DeliveryStatusLocalizationID: number;
  DeliveryStatusID: number;
  LocalizationID: number;
  DeliveryStatus: string;
}

export type deliverystatus_localizationPk = "DeliveryStatusLocalizationID";
export type deliverystatus_localizationId = deliverystatus_localization[deliverystatus_localizationPk];
export type deliverystatus_localizationOptionalAttributes = "DeliveryStatusLocalizationID";
export type deliverystatus_localizationCreationAttributes = Optional<deliverystatus_localizationAttributes, deliverystatus_localizationOptionalAttributes>;

export class deliverystatus_localization extends Model<deliverystatus_localizationAttributes, deliverystatus_localizationCreationAttributes> implements deliverystatus_localizationAttributes {
  DeliveryStatusLocalizationID!: number;
  DeliveryStatusID!: number;
  LocalizationID!: number;
  DeliveryStatus!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof deliverystatus_localization {
    return deliverystatus_localization.init({
    DeliveryStatusLocalizationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeliveryStatusID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeliveryStatus: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'deliverystatus_localization',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DeliveryStatusLocalizationID" },
        ]
      },
    ]
  });
  }
}
