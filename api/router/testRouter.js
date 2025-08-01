const express = require("express");
const test = express.Router();
const {health , cookieTest} = require("../controllers/test.controller")
const {dumbCookieSetter} = require("../middleware/dumb.middleware")

test.get("/" , health );
test.get("/cookieSet" , dumbCookieSetter , (req,resp)=>{
    return resp.json({message : "set cookie"})
});
test.get("/testing" , cookieTest)
module.exports = {
    test
}