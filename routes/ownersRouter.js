const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("hey");
})
//making it git
module.exports = router;