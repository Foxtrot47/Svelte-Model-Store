import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface productcommentsAttributes {
  ProductCommentID: number;
  ProductID: number;
  ParentID?: number;
  IsDeleted: boolean;
  CreatedDate: Date;
  CommentTitle: string;
  CommentBody?: string;
  IsQuestion: boolean;
  UserID: number;
  IsVisible: boolean;
}

export type productcommentsPk = "ProductCommentID";
export type productcommentsId = productcomments[productcommentsPk];
export type productcommentsOptionalAttributes = "ProductCommentID" | "ParentID" | "IsDeleted" | "CreatedDate" | "CommentBody" | "IsQuestion" | "IsVisible";
export type productcommentsCreationAttributes = Optional<productcommentsAttributes, productcommentsOptionalAttributes>;

export class productcomments extends Model<productcommentsAttributes, productcommentsCreationAttributes> implements productcommentsAttributes {
  ProductCommentID!: number;
  ProductID!: number;
  ParentID?: number;
  IsDeleted!: boolean;
  CreatedDate!: Date;
  CommentTitle!: string;
  CommentBody?: string;
  IsQuestion!: boolean;
  UserID!: number;
  IsVisible!: boolean;


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
      defaultValue: false
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
      defaultValue: false
    },
    UserID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    IsVisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
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
