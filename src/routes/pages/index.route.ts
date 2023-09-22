import express from 'express';
import homePageRouter from './home.route';

const pageRouter = express.Router();

pageRouter.use('/', homePageRouter);

export default pageRouter;
