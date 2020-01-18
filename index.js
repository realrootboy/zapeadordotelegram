require('dotenv/config');

const telebot = require('telebot');
const bot = new telebot(process.env.BOT_TOKEN);

const channelId = process.env.CHANNEL_ID;

const { getZapeado } = require('./requests');

const msgOptions = {
    parseMode: 'Markdown',
};

const sendToChannel = (msg) => {
    bot.sendMessage(channelId, msg, msgOptions);
}

bot.on('/zapear', async (msg) => {
    const receivedMsg = msg.text.replace('/zapear ', '');

    const zapeado = await getZapeado(receivedMsg);

    await msg.reply.text(zapeado, msgOptions);
    msg.reply.text("Postado em: @historiasdozap");

    sendToChannel(zapeado)
});

bot.on('/zapearescondido', async (msg) => {
    const receivedMsg = msg.text.replace('/zapearescondido', '');

    msg.reply.text(await getZapeado(receivedMsg), msgOptions);
});

bot.start();





const http = require('http');

http.createServer((req, res) => {
	res.write('Hello World!');
	res.end();
}).listen(process.env.PORT || 3333);




const axios = require('axios');
const cron = require('node-cron');

cron.schedule('0,15,30,45 * * * *', async () => {
	axios.get('http://zapeador.herokuapp.com/');
});
