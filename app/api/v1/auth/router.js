const express = require("express");
const router = express();
const { signinCms, getUser } = require("./controller");

router.post("/:nama", getUser);
router.post("/signin", signinCms);

module.exports = router;
