import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database/pgconfig';

export interface TaskAttributes {
  id: number;
  user_name: string;
  email: string;
  password:string;
  gender:string;
  createdAt:Date;
}

export interface TaskCreationAttributes extends Optional<TaskAttributes, 'id'> {}

class user extends Model<TaskAttributes, TaskCreationAttributes> implements TaskAttributes {
  public id!: number;
  public user_name!: string;
  public email!: string;
  public password!: string;
  public gender!:string;
  public createdAt!: Date;
  comparePassword!: (password: any) => Promise<boolean>;
}

user.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  tableName: 'user',
});

export default user;