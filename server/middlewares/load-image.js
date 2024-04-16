// @ts-check

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/assets/images/",
  filename: (req, file, cb) => {
    const fn = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = file.originalname.substring(file.originalname.lastIndexOf("."));
    cb(null, fn + ext);
  },
});
const upload = multer({ storage });

module.exports.loadImage = upload.single("image");
