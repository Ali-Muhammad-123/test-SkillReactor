import express from 'express';
import uploadRouter from './upload.route';
import downloadRouter from './download.route';

export const API_ROUTER_CONFIRMATION = '/api router works';

const apiRouter = express.Router();

apiRouter.use('/upload', uploadRouter);
apiRouter.use('/download', downloadRouter);
apiRouter.use('/', (_req, res) =>
  res.json({ message: API_ROUTER_CONFIRMATION })
);


export default apiRouter;
