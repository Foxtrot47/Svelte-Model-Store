import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface productdescriptionAttributes {
  ProductDescriptionID: number;
  ProductID: number;
  ProductDescriptionHTML?: string;
  LocalizationID: number;
}

export type productdescriptionPk = "ProductDescriptionID";
export type productdescriptionId = productdescription[productdescriptionPk];
export type productdescriptionOptionalAttributes = "ProductDescriptionID" | "ProductDescriptionHTML" | "LocalizationID";
export type productdescriptionCreationAttributes = Optional<productdescriptionAttributes, productdescriptionOptionalAttributes>;

export class productdescription extends Model<productdescriptionAttributes, productdescriptionCreationAttributes> implements productdescriptionAttributes {
  ProductDescriptionID!: number;
  ProductID!: number;
  ProductDescriptionHTML?: string;
  LocalizationID!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof productdescription {
    return productdescription.init({
    ProductDescriptionID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProductDescriptionHTML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    LocalizationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'productdescription',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductDescriptionID" },
        ]
      },
    ]
  });
  }
}
