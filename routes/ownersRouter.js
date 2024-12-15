const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("hey working proparly");
})
//making it git
module.exports = router;