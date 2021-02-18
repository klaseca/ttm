require('dotenv').config();

const { createServer } = require('http');
const WebSocket = require('ws');
const { connect } = require('mongoose');

const app = require('./app');
const messageHandler = require('./messageHandler');

const wss = new WebSocket.Server({ clientTracking: false, noServer: true });
const server = createServer(app);

const clients = new Set();

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

wss.on('connection', (ws, request) => {
  console.log('Conneting websocket');

  clients.add(ws);

  ws.on('message', async (message) => {
    const response = await messageHandler(message);
    ws.send(JSON.stringify(response));
  });

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Connection closed');
  });
});

const connectDb = () => {
  return connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
};

connectDb()
  .then(() => {
    console.log('Database connected');
    server.listen(3001, () => console.log('Server started :3'));
  })
  .catch((error) => console.error(error));
