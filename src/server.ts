import express, { Application, Request, Response } from 'express';
import routes from '@routes/index';

const createServer = () => {
  const app: Application = express();
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });
  app.use(routes);

  return app;
};

export default createServer;
