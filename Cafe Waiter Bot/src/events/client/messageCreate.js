const { client } = require("discord");

module.exports = {
    name: "messageCreate",
    async execute(message, client) {
        if (message.author.bot) return;
    },
};
