const express = require("express");
const app = express();
const port = 3000;

// 라우팅 파일 불러오기
const visitorRouter = require("./routes/visitorRoutes");

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
// json
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));

app.use("/visitor", visitorRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

// 기본 홈 라우트
app.get("/", (req, res) => {
  res.render("index", { title: "MVC 패턴" });
});

app.listen(port, () => {
  console.log(`서버 실행 ${port}`);
});
