const{
    Client,
    Discord,
    Attachment,
    Intents,
    MessageReaction,
    DiscordAPIError
} = require('discord.js');


const bot = new Client({ intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_VOICE_STATES,] });

const PREFIX = '!';

//const ytSearch = require("ytdl-search");
const ytdl = require("ytdl-core");
const queue = new Map();
var version = '1.2';
const { token } = require('./config.json');

var servers = {};


bot.on('ready', () =>{
    console.log('Bot is Online now.');
})

bot.on('messageCreate', async message =>{

    if(!message.content.startsWith(PREFIX) || message.author.bot) return;
    const server_queue = queue.get(message.guild.id);//getting from the global queue to see if 
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();
        
    if(command === 'ping'){
        message.reply('Pong!');
        //Client.commands.get('ping').execute(message,args);
    }
    else if(command === 'hi'){
        message.reply('hi');
    }
        

    });
bot.login(token);