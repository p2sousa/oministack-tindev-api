import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './src/routes/index';

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack?retryWrites=true', { useNewUrlParser: true });

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);

export default app;
