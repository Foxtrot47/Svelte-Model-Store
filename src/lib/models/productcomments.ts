import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface productcommentsAttributes {
  ProductCommentID: number;
  ProductID: number;
  ParentID?: number;
  IsDeleted: number;
  CreatedDate: Date;
  CommentTitle: string;
  CommentBody?: string;
  IsQuestion: number;
  UserID: number;
  IsVisible: number;
}

export type productcommentsPk = "ProductCommentID";
export type productcommentsId = productcomments[productcommentsPk];
export type productcommentsOptionalAttributes = "ProductCommentID" | "ParentID" | "IsDeleted" | "CreatedDate" | "CommentBody" | "IsQuestion" | "IsVisible";
export type productcommentsCreationAttributes = Optional<productcommentsAttributes, productcommentsOptionalAttributes>;

export class productcomments extends Model<productcommentsAttributes, productcommentsCreationAttributes> implements productcommentsAttributes {
  ProductCommentID!: number;
  ProductID!: number;
  ParentID?: number;
  IsDeleted!: number;
  CreatedDate!: Date;
  CommentTitle!: string;
  CommentBody?: string;
  IsQuestion!: number;
  UserID!: number;
  IsVisible!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof productcomments {
    return productcomments.init({
    ProductCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ProductID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ParentID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    CommentTitle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CommentBody: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IsQuestion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    UserID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    IsVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'productcomments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductCommentID" },
        ]
      },
    ]
  });
  }
}
