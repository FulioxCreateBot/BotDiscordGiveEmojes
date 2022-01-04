require('dotenv').config()

const Discord = require ('discord.js') 
const comms = require("./comms.js");
//const stats = require("./stats.js");
const { config } = require("dotenv")
const { Client, Collection, Intents } = require("discord.js")


const client = new Client({
    intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MEMBERS, 
    Intents.FLAGS.GUILD_BANS, 
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, 
    Intents.FLAGS.GUILD_INTEGRATIONS, 
    Intents.FLAGS.GUILD_WEBHOOKS, 
    Intents.FLAGS.GUILD_INVITES, 
    Intents.FLAGS.GUILD_VOICE_STATES, 
    Intents.FLAGS.GUILD_PRESENCES, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS, 
    Intents.FLAGS.GUILD_MESSAGE_TYPING, 
    Intents.FLAGS.DIRECT_MESSAGES, 
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ]
})

// УСПЕШНЫЙ ЗАПУСК //
client.on("ready", function() {
    console.log(client.user.username + " запустился!");
  });

// КОМАНДЫ //

client.on("message", msg => {
    if (msg.content === "Привет") {
    msg.reply("Ты мой кумир❤️")

    } else if (msg.content === "Ты мой бро") {
    msg.channel.send("Ты крут")

    } else if (msg.content === "я тебя люблю") {
    msg.react("❤️")

    }  else if (msg.content === "Тестовая") {
    msg.member.roles.add ("711873122525118524");
    }
    })

client.login(process.env.BOT_TOKEN);