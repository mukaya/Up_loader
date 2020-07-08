const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "files"),
    filename: (request, file, cp) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cp(null, `${name.replace(/\s/g, "")}-${Date.now()}${ext}`);
    },
  }),
};
