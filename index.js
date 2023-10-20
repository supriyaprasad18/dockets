const express = require("express");
const app = express();
const port= process.env.PORT||3001;
const cors = require("cors");
const bodyParser = require('body-parser');
const dbService = require('./server/db');

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/", require("./server/routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`express running on port ${port}`);
});
