module.exports = (client) => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setUsername('wgytbotbeta');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
	    url:"https://josh-bot-staging.herokuapp.com/",
            name: "commands. BETA VERSION. https://josh-bot-staging.herokuapp.com/",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });}
