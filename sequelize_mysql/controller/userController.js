const userModel = require("../model/userModel");
const sequelize = require("../config/database");

// async function userPage(req, res) {
//   const allUsers = await userModel.allUsers();
//   res.render("viewUsers", { allUsers });
// }

async function userDetailPage(req, res) {
  const oneUser = await userModel.exportOne(req.params.id);
  res.render("viewDetail", { oneUser });
}

async function addUser(req, res) {
  await userModel.createUser(req.body);
  res.send("200");
}

async function deleteUser(req, res) {
  await userModel.deleteRow(req.params.id);
  res.render("200");
}

async function userEditPage(req, res) {
  const editUser = await userModel.exportOne(req.params.id);
  res.render("viewEdit", { editUser });
}

async function updateUser(req, res) {
  await userModel.updateRow(req.body);
  res.send("200");
}

module.exports = {
  userDetailPage,
  addUser,
  deleteUser,
  userEditPage,
  updateUser,
};
// userPage,
