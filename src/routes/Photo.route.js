const express = require("express");
const Router = express.Router();
const PhotoController = require("../controllers/PhotoController");
const multer = require("multer");
const upoadConfig = require("../config/upload");
const upload = multer(upoadConfig);

Router.post(
  "/postphotos",
  upload.single("filename"),
  PhotoController.postPhoto()
);
Router.delete("/deletephotos", PhotoController.deletePhoto());

module.exports = Router;
