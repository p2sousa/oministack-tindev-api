import express from 'express';
import io from 'socket.io';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server } from 'http';
import routes from './src/routes/index';

const app = express();
const server = Server(app);
const socket = io(server);
const connectedUsers = {};

socket.on('connection', socketIo => {
  const { user } = socketIo.handshake.query;
  connectedUsers[user] = socketIo.id;
});

mongoose.connect('mongodb://localhost:27017/omnistack?retryWrites=true', { useNewUrlParser: true });

app.use((req, res, next) => {
  req.socket = socket;
  req.connectedUsers = connectedUsers;
  
  return next();
});

app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(3333);

export default server;
