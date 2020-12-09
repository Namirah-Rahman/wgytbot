require("dotenv").config()
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
fs.readdir("./events/", (err, files) => {
  files.forEach((file) => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

client.login(process.env.TOKEN)

/* SERVER */

/* Setup Express Js */
var express = require('express')
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({windowMs: 2 * 60 * 1000, max: 90});
var app = express()
app.use(limiter); // apply to all requests
/* Express Config */
var listener = app.listen(process.env.PORT, () => {
    console.log(`Your app is listening on port ${listener.address().port}`);
});
/* Main Pages */
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/pages/index.html`);
}); // pages/Index.html
app.get("/added", (request, response) => {
    response.sendFile(`${__dirname}/pages/added.html`);
}); // pages/Added.html
app.get("/about", (request, response) => {
    response.sendFile(`${__dirname}/pages/about.html`);
}); // pages/About.html
app.get("/blog", (request, response) => {
    response.sendFile(`${__dirname}/blog/index.html`);
}); // Blog/index.html
app.get("/commands", (request, response) => {
    response.sendFile(`${__dirname}/pages/commands.html`);
}); // pages/Commands.html
app.get("/invite", (request, response) => {
    response.sendFile(`${__dirname}/pages/invite.html`);
}); // pages/Invite.html
/* Blog Posts */
app.get("/blog/1", (request, response) => {
    response.sendFile(`${__dirname}/blog/1.html`);
});
