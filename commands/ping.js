const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let pingembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("**Pong🎉🎉! Websocket Latency**:", `${Math.round(client.ping)}ms`);
    message.channel.send({ embed: pingembed })
}