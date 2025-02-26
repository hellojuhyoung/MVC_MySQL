const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./router/userRouter");
const userModel = require("./model/userModel");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", async function (req, res) {
  const allUsers = await userModel.exportAll();
  res.render("viewUsers", { allUsers });
});
//404 error
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
