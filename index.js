const express = require("express");
const app = express();
const port= process.env.PORT||3001;
const cors = require("cors");
const bodyParser = require('body-parser');
const dbService = require('./server/db');

const corsOptions = {
  origin: 'https://6532cfb3062e1b0657119f93--melodic-tarsier-8f3621.netlify.app/',
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
