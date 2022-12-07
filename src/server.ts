import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';
import swwagerFile from './swagger.json';

const app = express();

app.use(express.json());

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swwagerFile));

app.use(router);

app.listen(3333, () => console.log('Server is running')); 