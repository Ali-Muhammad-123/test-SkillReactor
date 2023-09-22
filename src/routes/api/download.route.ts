import express from 'express';
import { index } from '../../controllers/api/download.controller';
const downloadRouter = express.Router();

downloadRouter.route('/').get(index);

export default downloadRouter;
