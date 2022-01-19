const Telegraf = require('telegraf');
const token = '5000452490:AAETQe5XQfBQAGETNdnoT8lrr5iUB53CHOY';
const bot = new Telegraf(token);


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});
