const PhotoUpload = require("../models/PhotoModel");

class PhotoController {
  static postPhoto() {
    return async (request, response, next) => {
      console.log(request);
      //   const { filename } = request.files;
      //   if (!filename)
      //     return response.status(422).json({ message: "Not file upload" });
      //   const photo = new PhotoUpload({
      //     photo: filename,
      //   });
      //   await photo
      //     .save()
      //     .then((result) => response.json(result))
      //     .catch((error) => console.log(error));
    };
  }
  static deletePhoto() {
    return async (request, response, next) => {
      await response.json("Supprimer");
    };
  }
}

module.exports = PhotoController;
