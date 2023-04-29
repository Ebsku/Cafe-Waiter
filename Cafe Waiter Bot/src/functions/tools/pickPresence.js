const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
            {
                type: ActivityType.Watching,
                text: "ducks",
                status: "idle",
            },
            {
                type: ActivityType.Playing,
                text: "Mutate them!",
                status: "online",
            },
        ];

        const option = Math.floor(Math.random() * options.lenght);

        client.user.setPresence({
            activities: [
                {
                    name: options[option].text,
                    type: options[option].type,
                },
            ],
            status: options[option].status,
        });
    };
};
