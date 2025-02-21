const express = require("express");
const app = express();
const PORT = 3000;
//라우터 분리
const visitorRouter = require("./routes/visitorRoutes");
//directs the url link to /visitor
//app.use url

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/visitor", visitorRouter);
//
//
// app.post("/test", (req, res) => {
//   console.log("Test route req.body:", req.body);
//   res.send("Test route works!");
// });
//
//
app.set("view engine", "ejs");
app.set("views", "./views");

//app.get.....res.render('file name')
app.get("/", function (req, res) {
  res.render("index");
});
//404 error
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
