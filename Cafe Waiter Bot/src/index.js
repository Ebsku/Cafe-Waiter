require("dotenv").config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const chalk = require("chalk");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
});
client.commands = new Collection();
client.buttons = new Collection();
client.commandArray = [];
client.colour = "0xfee75c";
client.version = "1.0.0";

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client);
}

//Listen for dms
client.on("messageCreate", async (message) => {
    const staffchat = client.channels.cache.get("1003700334981554338");

    if (message.guild) return;

    //Log the message to the console
    console.log(
        chalk.green(
            `Message recieved: ${message.author.tag}: ${message.content}`
        )
    );

    //Send the message to staff chat
    staffchat.send(
        `Message recieved: ${message.author.tag}: ${message.content}`
    );
});

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);
