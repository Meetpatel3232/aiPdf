const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const { uploadPDF } = require("../controllers/uploadController");
const protect = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  upload.single("pdf"),
  uploadPDF
);

module.exports = router;