const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Return my ping!"),

    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });
        const embed = new EmbedBuilder()
            .setColor(client.colour)
            .setTitle("**Ping**")
            .setDescription(
                `API Latency: ${client.ws.ping}\nClient Ping: ${
                    message.createdTimestamp - interaction.createdTimestamp
                }`
            );

        await interaction.editReply({
            embeds: [embed],
        });
    },
};
