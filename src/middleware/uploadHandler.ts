const sharp = require("sharp")
const path = require('path')
const fs = require('fs') 
const Busboy = require('busboy');


const uploadImages = (req: any, res: any, next: () => void) => {
  
  var busboy =  Busboy({ headers: req.headers });

  req.pipe(busboy);
  req.body.files = [];

  busboy.on('file', function(fieldname: any, file: { pipe: (arg0: any) => void; }, filename: any, encoding: any, mimetype: any) {
    var saveTo = path.join(__dirname,'../../uploads/', filename.filename);
    console.log('Uploading: ' + saveTo);
    file.pipe(fs.createWriteStream(saveTo));
    req.body.files.push( filename.filename) 
  });
  busboy.on('finish', function() {
    console.log('Upload complete');
    next();
  });
    

 
};

const transform = async (req : any, res: any, next: () => void) => {
  if (!req.body.files) return next();

  req.body.images = [];
  await Promise.all(
    req.body.files.map(async (file: any) => {

      await sharp(path.join(__dirname,'../../uploads/', file))
        .rotate()
        .toFormat("jpeg")
        .jpeg({ quality: 100 })
        .toFile(`uploads/${Date.now()}${file}`);

      req.body.images.push(`${Date.now()}${file}`);
    })
  );

  next();
};


module.exports = {
  uploadImages: uploadImages,
  transform: transform
};
