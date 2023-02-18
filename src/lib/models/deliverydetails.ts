import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface deliverydetailsAttributes {
  DeliveryID: number;
  OrderProductID: number;
  DeliveryTypeID: number;
  DeliveryStatusID: number;
  CreatedDate: Date;
  ModifiedDate: Date;
}

export type deliverydetailsPk = "DeliveryID";
export type deliverydetailsId = deliverydetails[deliverydetailsPk];
export type deliverydetailsOptionalAttributes = "DeliveryID" | "DeliveryStatusID" | "CreatedDate" | "ModifiedDate";
export type deliverydetailsCreationAttributes = Optional<deliverydetailsAttributes, deliverydetailsOptionalAttributes>;

export class deliverydetails extends Model<deliverydetailsAttributes, deliverydetailsCreationAttributes> implements deliverydetailsAttributes {
  DeliveryID!: number;
  OrderProductID!: number;
  DeliveryTypeID!: number;
  DeliveryStatusID!: number;
  CreatedDate!: Date;
  ModifiedDate!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof deliverydetails {
    return deliverydetails.init({
    DeliveryID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    OrderProductID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeliveryTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeliveryStatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'deliverydetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DeliveryID" },
        ]
      },
    ]
  });
  }
}
