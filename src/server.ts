import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import { AppDataSource } from './data-source';
import swwagerFile from './swagger.json';

import './shared/container'


AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swwagerFile));

  app.use(router);

  app.listen(3333, () => console.log('Server is running'));
})