module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setUsername('wgytbotbeta');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "commands. BETA VERSION. https://wgytbot-1.williamhorning.repl.co",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });}
