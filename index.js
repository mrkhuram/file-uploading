const express = require("express");
require("dotenv").config();
// const connectDatabase = require("./config/connection");
const app = express();
const path = require("path");
const cors = require("cors");
var randomize = require('randomatic');
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const _dirname = path.resolve();
app.use("uploads", express.static(path.join(_dirname, "./uploads")));

// const path = require("path");
const multer = require("multer");

// const _dirname = path.resolve()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads");
  },
  filename(req, file, cb) {
    cb(
      null,
      randomize('*', 5)+"."+file.originalname.split('.')[1]
    );
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error(""));
    }
  },
});

app.use("/", express.static(path.join(_dirname, "./uploads")));

// Dish CRUD
app.post("/api/create_file", upload.single("file"), async function (req, res) {
  try {
    let image;
    if (req.file) image = `${req.file.filename}`;

    // The data is valid and new we can register the user
    return res.json(image);
  } catch (err) {
    return res.status(err.status || 500).send(err.message);
  }
});

app.use(express.static("./build"));

app.use("*", (req, res) => {
  res.sendfile("./build/index.html");
});

// connectDatabase();
const PORT = process.env.PORT || 9090;

app.listen(PORT, function () {
  console.log("server is started on port " + PORT);
});
