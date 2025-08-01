require("dotenv").config();
const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")

const {test} = require("./router/testRouter")

app.use(cookieParser());
app.use(express.json());

app.use("/home" , test)

app.listen(8000);

module.exports = app