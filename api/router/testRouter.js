const express = require("express");
const test = express.Router();
const {health , cookieTest} = require("../controllers/test.controller")
const {dumbCookieSetter} = require("../middleware/dumb.middleware")

test.get("/" , health );
test.get("/cookie" , dumbCookieSetter , cookieTest)
module.exports = {
    test
}