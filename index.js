const TelegramBot = require('node-telegram-bot-api');

const token = '8713892740:AAHbe1y9hdD6NQEBk-YYMvlTf4ScgV79bDM';

const bot = new TelegramBot(token, { polling: true });

// команда /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    '🌳 Добро пожаловать в Fruit Miner!\nНажми кнопку ниже 👇',
    {
      reply_markup: {
        keyboard: [['🍎 Собрать']],
        resize_keyboard: true,
      },
    }
  );
});

// обработка кнопки
bot.on('message', (msg) => {
  if (msg.text === '🍎 Собрать') {
    bot.sendMessage(msg.chat.id, 'Ты собрал 0.01 TON 🍏');
  }
});