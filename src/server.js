const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

function init() {
  try {
    app.listen(`3000`, () => {
      console.log(`server listening at port ${3000}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

init();
