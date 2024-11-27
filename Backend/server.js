const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./router/auth');
const commentRoutes = require('./router/comments');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', commentRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

app.set('socketio', io);

server.listen(5000, () => console.log('Server running on http://localhost:5000'));
