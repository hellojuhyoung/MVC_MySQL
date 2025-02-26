// const { Sequelize, DataTypes } = require("sequelize");

// //database connection
// //new Sequelize ('database', 'user', 'password',{'host', 'dialect'})
// const sequelize = new Sequelize("sequelize_practice", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// //define the user model
// const User = sequelize.define(
//   "User",
//   {
//     userid: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     comment: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//   },
//   {
//     tableName: "users",
//     timestamps: false,
//   }
// );
//
//
//
"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Import Sequelize instance

class User extends Model {}

User.init(
  {
    userid: DataTypes.STRING,
    name: DataTypes.STRING,
    comment: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: false,
  }
);

//export all users
async function exportAll() {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("model fetching all users", error);
    throw error;
  }
}

//export one user by ID
async function exportOne(id) {
  try {
    return await User.findByPk(id);
  } catch (error) {
    console.error("model fetching user by ID", error);
    throw error;
  }
}

//create a new user
async function createUser(data) {
  try {
    return await User.create(data);
  } catch (error) {
    console.error("model create user", error);
    throw error;
  }
}

//delete a user by ID
async function deleteRow(id) {
  try {
    return await User.destroy({
      where: { id: id },
    });
  } catch (error) {
    console.error("model delete", error);
    throw error;
  }
}

//update a user by ID
async function updateRow(data) {
  try {
    const { id, name, comment } = data;
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.comment = comment;
      await user.save();
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("updating user", error);
    throw error;
  }
}

module.exports = {
  sequelize,
  User,
  exportAll,
  exportOne,
  createUser,
  deleteRow,
  updateRow,
};
