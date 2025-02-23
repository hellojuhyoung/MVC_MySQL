const mysql = require("mysql2/promise");

// MySQL 연결 설정
let connection;

async function getConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "1234", // 실제 비밀번호로 수정
      database: "world", // 실제 데이터베이스 이름으로 수정
    });
  }
  return connection;
}

module.exports = { getConnection };
