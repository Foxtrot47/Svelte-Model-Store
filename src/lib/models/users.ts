import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usersAttributes {
  UserID: number;
  Password: string;
  FirstName: string;
  LastName: string;
  Email?: string;
  UserTypeID?: number;
  CreatedDate: Date;
  ModifiedDate: Date;
  StatusID: number;
  MobileNumber?: string;
  PasswordCreatedDate?: Date;
  IsLocked?: boolean;
  LockedAtTime?: Date;
  LockoutCounter?: number;
  IsActivated: boolean;
  ActivationToken?: string;
  GenderID?: number;
  Birthday?: Date;
  DefaultLocalization?: number;
  UsersUniqueID: string;
}

export type usersPk = "UserID";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "UserID" | "Email" | "UserTypeID" | "CreatedDate" | "ModifiedDate" | "StatusID" | "MobileNumber" | "PasswordCreatedDate" | "IsLocked" | "LockedAtTime" | "LockoutCounter" | "IsActivated" | "ActivationToken" | "GenderID" | "Birthday" | "DefaultLocalization";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  UserID!: number;
  Password!: string;
  FirstName!: string;
  LastName!: string;
  Email?: string;
  UserTypeID?: number;
  CreatedDate!: Date;
  ModifiedDate!: Date;
  StatusID!: number;
  MobileNumber?: string;
  PasswordCreatedDate?: Date;
  IsLocked?: boolean;
  LockedAtTime?: Date;
  LockoutCounter?: number;
  IsActivated!: boolean;
  ActivationToken?: string;
  GenderID?: number;
  Birthday?: Date;
  DefaultLocalization?: number;
  UsersUniqueID!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    UserID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UserTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    StatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    MobileNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PasswordCreatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    LockedAtTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockoutCounter: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    ActivationToken: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    GenderID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DefaultLocalization: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UsersUniqueID: {
      type: DataTypes.CHAR(36),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
  }
}
