const visitorModel = require("../models/visitorModel");

// 전체
const visitorPage = async (req, res) => {
  const visitor = await visitorModel.getAll();
  res.render("visitor", { visitor });
};

// 하나
const visitorOne = async (req, res) => {
  const visitor = await visitorModel.getOne(req.params.id);
  res.render("visitorone", { visitor });
};

// 등록
const createTest = async (req, res) => {
  await visitorModel.postData(req.body);
  res.send("200");
};

// 해당 아이디 삭제
const deleteData = async (req, res) => {
  await visitorModel.deleteRow(req.params.id);
  res.send("200");
};

const moveWrite = async (req, res) => {
  const visitor = await visitorModel.getOne(req.params.id);
  res.render("visitorwrite", { visitor });
};

// 데이터 업데이트
const dataUpdate = async (req, res) => {
  await visitorModel.updateRow(req.body);
  res.send("200");
};

module.exports = {
  visitorPage,
  visitorOne,
  createTest,
  deleteData,
  moveWrite,
  dataUpdate,
};
