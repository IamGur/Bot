const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const rechannel = '443668886878027776';
const botowner = '324432889561219072';

let statuses = ['!help', 'Hello!'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  setInterval(function() {
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setPresence({game: {name: status }, status: 'online' });
    //client.user.setPresence({ activity: {name: status }, status: 'online'});
  }, 10000)
});
// Create an event listener for messages
client.on('message',async message => {

  if (message.author.bot) return undefined;

  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();

  try {
    if (command === 'ui') command = 'userinfo';
    if (command === 'delete') command = 'purge';
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch(e){
    console.log(e.stack)
  } finally {
    console.log(command)
  }
})


client.login(process.env.BOTTOKEN);