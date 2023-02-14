import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface productcommentreactionsAttributes {
  ProductCommentReactionsID: number;
  ProductCommentID?: number;
  ReactionTypeID: number;
  UserID: number;
}

export type productcommentreactionsPk = "ProductCommentReactionsID";
export type productcommentreactionsId = productcommentreactions[productcommentreactionsPk];
export type productcommentreactionsOptionalAttributes = "ProductCommentReactionsID" | "ProductCommentID";
export type productcommentreactionsCreationAttributes = Optional<productcommentreactionsAttributes, productcommentreactionsOptionalAttributes>;

export class productcommentreactions extends Model<productcommentreactionsAttributes, productcommentreactionsCreationAttributes> implements productcommentreactionsAttributes {
  ProductCommentReactionsID!: number;
  ProductCommentID?: number;
  ReactionTypeID!: number;
  UserID!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof productcommentreactions {
    return productcommentreactions.init({
    ProductCommentReactionsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ProductCommentID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ReactionTypeID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productcommentreactions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductCommentReactionsID" },
        ]
      },
    ]
  });
  }
}
