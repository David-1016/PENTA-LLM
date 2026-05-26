import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import os from 'os';
import chatRoutes from './routes/chat.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Backend Prompt Injection Lab funcionando correctamente',
    mode: process.env.APP_MODE || 'LAB'
  });
});

app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3001;

const getLocalNetworkIP = () => {
  const interfaces = os.networkInterfaces();

  const ignoredNames = [
    'virtualbox',
    'vmware',
    'hyper-v',
    'wsl',
    'docker',
    'ethernet 3'
  ];

  for (const name of Object.keys(interfaces)) {
    const lowerName = name.toLowerCase();

    const isIgnored = ignoredNames.some((ignored) =>
      lowerName.includes(ignored)
    );

    if (isIgnored) continue;

    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }

  return 'localhost';
};

const localIP = getLocalNetworkIP();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
Servidor Prompt Injection Lab ejecutándose:

Local:
http://localhost:${PORT}

Red local:
http://${localIP}:${PORT}
  `);
});