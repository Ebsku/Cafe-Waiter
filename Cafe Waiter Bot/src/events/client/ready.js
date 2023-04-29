const { ActivityType } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        //setInterval(client.pickPresence, 60 * 1000)
        //setInterval(function() { console.log('Changed status!') }, 60 * 1000)
        client.user.setPresence({
            activities: [
            {
                name: "Mutate them!",
                type: ActivityType.Playing
            }
            ],
            status: "online",
        });
        console.log(`Logged in as ${client.user.tag}!`);
    }
}