//renders folder

const visitorModel = require("../model/visitorModel");

const visitorPage = async (req, res) => {
  const visitor = await visitorModel.getAll();
  res.render("visitor", { visitor });
};

const visitorOne = async (req, res) => {
  const visitorOne = await visitorModel.getOne(req.params.id);
  res.render("visitorOne", { visitorOne });
};

//등록
const createTest = async (req, res) => {
  await visitorModel.createVisitor(req.body);
  res.send("200");
};

//해당 아이디 삭제
const deleteData = async (req, res) => {
  await visitorModel.deleteRow(req.params.id);
  res.send("200");
};

//수정 페이지 이동
const moveWrite = async (req, res) => {
  const editVisitor = await visitorModel.getOne(req.params.id);
  res.render("visitorwrite", { editVisitor });
};

//데이터 업데이트
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
