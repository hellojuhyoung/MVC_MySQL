const mysql = require("mysql2/promise");

//DB 연결
const pool = mysql.createPool({
  host: "localhost", //db가 설치된 호스트 ip 주소
  user: "root", //db 접속 유저이름
  password: "", //db 접속 비밀번호
  database: "user", //db 이름
});

//데이터 전부 가져오기
const getAll = async () => {
  const query = "SELECT * FROM users";
  const [rows] = await pool.query(query);
  return rows;
};

//해당하는 데이터 하나만 가져오기
const getOne = async (userId) => {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  const [rows] = await pool.query(query);
  return rows;
};

// const sampleData = [
//   { id: 1, name: "홍길동", comment: "내가 왔다!" },
//   { id: 2, name: "이찬혁", comment: "으라차차!" },
// ];

// const allSampleData = () => {
//   return sampleData;
// };

//등록하기
const createVisitor = async (data) => {
  try {
    const query = "INSERT INTO users (userid, name, comment) VALUES (?, ?, ?)";
    await pool.query(query, [data.userid, data.name, data.comment]);
    return; // Or return the whole inserted object if needed
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error; // Re-throw the error for the controller to handle
  }
};

// const createVisitor = async (visitorData) => {
//   console.log("Model function called with:", visitorData);
//   return { message: "Model function called successfully" }; // Return a dummy object
// };

//해당 아이디를 가진 행 삭제
const deleteRow = async (id) => {
  const query = `DELETE FROM users WHERE id = ${Number(id)}`;
  try {
    await pool.query(query, [id]);
  } catch (error) {
    console.log(error);
  }
};

//해당 아이디를 가진 데이터 수정
const updateRow = async (data) => {
  const query = `UPDATE users SET name = ?, comment = ? WHERE id = ?`;
  try {
    await pool.query(query, [data.name, data.comment, Number(data.id)]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getOne, createVisitor, deleteRow, updateRow };
