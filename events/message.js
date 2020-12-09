const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
module.exports = (client, message) => {
    const Discord = require("discord.js")
    const fetch = require("node-fetch")
    const prefix = 'm!';
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        const pingembd = {
            "title": "Waste Of Money Pinged",
            "description": `Pong! 🏓 I have a latency of ${Date.now() - message.createdTimestamp}ms.`,
            "color": 11730944,
            "footer": {
                "text": "Waste Of Money is made with ❤ by @wgyt#2120",
                "icon_url": "https://www.wgyt.tk/images/logo.png"
            }
        }
        message.channel.send({
            embed: pingembd
        });
    } else if (command === 'prefix') {
        message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
    } else if (command === 'kick') {
        const member = message.mentions.members.first()
        if (!member) {
            return message.reply(
                `Who are you trying to kick? You must mention a user.`
            )
        }
        if (!member.kickable) {
            return message.reply(`I can't kick this user. Sorry!`)
        }
        return member
            .kick()
            .then(() => message.reply(`${member.user.tag} was kicked.`))
            .catch((error) => message.reply(`Sorry, an error occured.`))
    } else if (command === 'help') {
        const helpembd = {
            "title": "Waste Of Money Help",
            "description": "Thanks for using Waste Of Money!",
            "color": 11730944,
            "fields": [{
                "name": "Commands",
                "value": "To read about all of our commands go to https://bot.wgyt.tk/commands"
            }, {
                "name": "Help with other aspects of the bot",
                "value": "For help with the bot in general, message @Wgyt#2120 or join Waste Of Money's server at https://discord.gg/PhwN8A9Bgp"
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
                "text": "Waste Of Money is made with ❤ by @wgyt#2120",
                "icon_url": "https://www.wgyt.tk/images/logo.png"
            }
        }
        message.author.send({
            embed: helpembd
        });
    } else if (command === "pingme") {
        message.channel.send(`Pong! 🏓 ${message.author}`);
    } else if (command === "source") {
        message.channel.send("Waste Of Money isn't open-source but our base WgytBot is open-source! :partying_face: My source is available at https://github.com/wgyt735yt/Waste Of Money :)");
    } else if (command === "christmas") {
        message.channel.send(":santa:  Happy holidays, " + message.author);
    } else if (command === "gtg") {
        message.channel.send(message.author + " has to go!");
    } else if (command === "got to go") {
        message.channel.send(message.author + " has to go!");
    }else if(command==="status"){
			fetch('https://dev.wasteof.money')
      .then(function(response) {
      if (response.status != "200") {
        message.channel.send(`:red_square:  ${response.status} Offline`)
      } else {
        message.channel.send(`:green_square:  ${response.status} Online`)
      }
      } else {
        message.channel.send("Sadly, that's not a command.");
    })
		}
}
