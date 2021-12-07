import 'dotenv/config';
import dotenv from 'dotenv-safe';
import createServer from './server';

dotenv.config({ example: './config/.env.example', path: './config/.env' });

const startServer = () => {
  const app = createServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || 4000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
