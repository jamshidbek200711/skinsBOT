const TelegramBot = require('node-telegram-bot-api');
const token = '6760695485:AAEx1gtFgHLqs1JKbwvB7HA48AtM_dlP-j0';
const bot = new TelegramBot(token, {polling: true});

// Listen for new members joining the group
bot.on('new_chat_members', (msg) => {
  // const username = msg.from.username
    const chatId = msg.chat.id;
    const newMember = msg.new_chat_members[0].username;
    bot.sendMessage(chatId, `Assalamu Alaykum @${newMember}! Skins_uz Chatiga HUSH KELIBSIZ😊! Bu Chatda BOLALAR uchun KIYIMLAR topasiz👕. Savol va zakazlar CHATDA yoki ADMIN lichkasiga👇
  @AlievaDilorom`);
});

// '/start' 
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Bot is active. Welcome messages enabled!');
});

bot.on('message', (msg) => {
  try{
    const username = msg.from.username
    const chatId = msg.chat.id;
    const messageText = msg.text.toLowerCase();

  if (messageText.includes('нарх') || messageText.includes('narh') || messageText.includes('narx')){
          bot.sendMessage(chatId, `@${username} tez orada Admin sizga javob beradi😊`);
    }
  } catch{}    
});

  