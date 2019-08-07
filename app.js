import express from 'express';
import routes from './src/routes/index';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);

export default app;
