require("dotenv").config();

const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "hello there! Welcome to my new telegram bot.",
    {}
  );
});

bot.command("casos", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "El oráculo predice que la cantidad de casos positivos de hoy será: " + (Math.floor(Math.random() * 100000)+60000),
    {}
  );
});


bot.command("mueltes", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "El oráculo predice que la cantidad de mueltes de hoy será: " + (Math.floor(Math.random() * 300)+50),
    {}
  );
});

bot.hears("animals", (ctx) => {
  console.log(ctx.from);
  let animalMessage = `great, here are pictures of animals you would love`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "dog",
            callback_data: "dog",
          },
          {
            text: "cat",
            callback_data: "cat",
          },
        ],
      ],
    },
  });
});

bot.action("dog", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/dog.jpg",
  });
});

bot.action("cat", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, {
    source: "res/cat.jpg",
  });
});

bot.launch();
