const express = require("express");
const { getCSVData, getDocketList, createDocket } = require("../controller");
const router = express.Router();

router.get("/getFileData", getCSVData);
router.get("/getDocketList", getDocketList);
router.post("/createDocket", createDocket);

module.exports = router;
