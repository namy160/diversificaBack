const express = require("express");
const router = require("./src/routes/routes.js");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const dbService = require("./database");
//const e = require("express");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("<h1>Hello, Backenders to the Express.js Server!</h1>");
});

app.get("/getTest", (req, res) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getTest();

  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//change this part of the code once we have the info from the database
// app.listen(process.env.PORT, () => console.log('app is running on PORT: '+ process.env.PORT));
module.exports = router;
