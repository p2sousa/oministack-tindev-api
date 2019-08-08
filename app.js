import express from 'express';
import cors from 'cors';
import routes from './src/routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);

export default app;
