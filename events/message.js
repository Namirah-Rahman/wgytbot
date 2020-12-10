const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
module.exports = (client, message) => {
    const Discord = require("discord.js")
    const fetch = require("node-fetch")
    const prefix = 'w!';
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        const pingembd = {
            "title": "WgytBot Pinged",
            "description": `Pong! 🏓 I have a latency of ${Date.now() - message.createdTimestamp}ms.`,
            "color": 11730944,
            "footer": {
                "text": "WgytBot is made with ❤ by @wgyt#2120",
                "icon_url": "https://www.wgyt.tk/images/logo.png"
            }
        }
        message.channel.send({
            embed: pingembd
        });
    } else if (command === 'prefix') {
        message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
    } else if (command === 'help') {
        const helpembd = {
            "title": "WgytBot Help",
            "description": "Thanks for using WgytBot!",
            "color": 11730944,
            "fields": [{
                "name": "Commands",
                "value": "To read about all of our commands go to https://bot.wgyt.tk/commands"
            }, {
                "name": "Help with other aspects of the bot",
                "value": "For help with the bot in general, message @Wgyt#2120 or join WgytBot's server at https://discord.gg/PhwN8A9Bgp"
            }, {
                "name": "Website",
                "value": "https://bot.wgyt.tk/"
            }, {
                "name": "Invite",
                "value": "Go to https://bot.wgyt.tk/invite to invite me to your server."
            }, {
                "name": "Offline",
                "value": "If I'm offline, I'm updating or down for maintenance, so don't worry!"
            }],
            "footer": {
                "text": "WgytBot is made with ❤ by @wgyt#2120",
                "icon_url": "https://www.wgyt.tk/images/logo.png"
            }
        }
        message.author.send({
            embed: helpembd
        });
    } else if (command === "pingme") {
        message.channel.send(`Pong! 🏓 ${message.author}`);
    } else if (command === "source") {
        message.channel.send("WgytBot is open-source! :partying_face: My source is available at https://github.com/wgyt735yt/wgytbot :)");
    } else if (command === "christmas") {
        message.channel.send(":santa:  Happy holidays, <@" + message.author + ">");
    } else if (command === "gtg") {
        message.channel.send("<@" + message.author + "> has to go!");
    } else if(command==="botstatus"){
			fetch('https://bot.wgyt.tk')
      .then(function(response) {
      if (response.status != "200") {
        message.channel.send(`:red_square:  ${response.status} Offline`)
      } else {
        message.channel.send(`:green_square:  ${response.status} Online`)
      }
     })
			}else if (command==="webstatus"){
			fetch(args[0])
      .then(function(response) {
      if (response.status != "200") {
        message.channel.send(`:red_square:  ${response.status} Offline`)
      } else {
        message.channel.send(`:green_square:  ${response.status} Online`)
      }
     })
			}else if(command==="repeat"){
				message.channel.send(`'${args[0]}' - <@${message.author}>`)
			}else if(command==="ban"){
				const member = message.author.id();
				if (member.roles.cache.some(role => role.name === 'MODS')) {				const user = message.mentions.users.first();
				guild.members.ban(user);
        message.channel.send("Banned!");
				}else{
				message.channel.send("Sadly, you can't do that.");
				}
			}else if(command==="funnyquote"){
				var randomCase = require('random-case');
				rndmzed = randomCase(args[0]);
				message.channel.send(`'${rndmzed}' - <@${message.mentions.users.first()}>`)
			}else if(command==="unban"){
				if (member.roles.cache.some(role => role.name === 'MODS')) {
				const id = args[0];
				guild.members.unban(id);
        message.channel.send("UnBanned!");
				}else{
				message.channel.send("Sadly, you can't do that.");
				}
			}else if(command==="kick"){
				if (member.roles.cache.some(role => role.name === 'MODS')) {
				const member = message.mentions.members.first();
				member.kick();
        message.channel.send("Kicked!");
				}else{
				message.channel.send("Sadly, you can't do that.");
				}
			}else {
        message.channel.send("Sadly, that's not a command.");
    };
}
