const TelegramBot = require("node-telegram-bot-api");
const instagramApi = require("./function");
const bot = new TelegramBot("6917151588:AAFFc1D7w7p4e4GKX0hlyJyz_qbwny_G8es", {
  polling: true,
});
bot.on("message", (mass) => {
  const chatId = mass.from.id;
  const message = mass.text;
  const video = instagramApi(message.toString());

  video.then((response) => {
    if (response.data.video) {
      bot.sendVideo(chatId, response.data.video);
    }
    if (response.data.image) {
      bot.sendPhoto(chatId, response.data.image);
    }
  });
});
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Boshlang'ich xabar
  const startMessage = `Assalomu alaykum hurmatli: ${msg.from.first_name} siz ushbu botga hush kelib siz, bu botga instagramdan videoni silkasini yuboring men uni sizga yuklab beraman`;

  // Boshlang'ich xabarni foydalanuvchiga yuborish
  bot.sendMessage(chatId, startMessage);
});
