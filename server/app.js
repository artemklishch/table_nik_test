const express = require("express");
const app = express();
const port = 8080;

const usersRoute = require("./routes/users");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Page");
  next();
});

app.use("/", usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
