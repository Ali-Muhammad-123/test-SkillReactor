import express from 'express';
import { index } from '../../controllers/api/upload.controller';
const uploadHandler = require("../../middleware/uploadHandler");
const uploadRouter = express.Router();

uploadRouter.route('/').post( uploadHandler.uploadImages,
    uploadHandler.transform ,
    index);

export default uploadRouter;
