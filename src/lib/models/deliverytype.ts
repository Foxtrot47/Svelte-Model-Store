import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface deliverytypeAttributes {
  ID: number;
  LocalizationID: number;
  DeliveryTypeName?: string;
  DeliveryTypeID: number;
}

export type deliverytypePk = "ID";
export type deliverytypeId = deliverytype[deliverytypePk];
export type deliverytypeOptionalAttributes = "ID" | "DeliveryTypeName";
export type deliverytypeCreationAttributes = Optional<deliverytypeAttributes, deliverytypeOptionalAttributes>;

export class deliverytype extends Model<deliverytypeAttributes, deliverytypeCreationAttributes> implements deliverytypeAttributes {
  ID!: number;
  LocalizationID!: number;
  DeliveryTypeName?: string;
  DeliveryTypeID!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof deliverytype {
    return deliverytype.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeliveryTypeName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DeliveryTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'deliverytype',
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
    ]
  });
  }
}
