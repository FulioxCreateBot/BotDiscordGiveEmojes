const Discord = require ('discord.js') 
const { config } = require("dotenv")

function stats (client) {
client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + 'stats')){
        if(message.author.bot) return;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Bot's Live Status")
            .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `")
            .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `")
            .addField(" \u200B ", "**Users** : ` " + `${client.users.cache.size}` + " `")
        message.channel.send(exampleEmbed);
    }
})
}