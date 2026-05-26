import {
  generateVulnerableResponse,
  generateProtectedResponse
} from '../services/chat.service.js';

export const vulnerableChat = (req, res) => {
  const { message } = req.body;

  const response = generateVulnerableResponse(message);

  res.json({
    mode: 'vulnerable',
    userMessage: message,
    botResponse: response
  });
};

export const protectedChat = (req, res) => {
  const { message } = req.body;

  const response = generateProtectedResponse(message);

  res.json({
    mode: 'protected',
    userMessage: message,
    botResponse: response
  });
};