const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("duck")
        .setDescription("Return a picture of duck!"),

    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        var duckgif = 'https://media.discordapp.net/attachments/1026566430847664238/1031602441302577242/trim.8869D73D-DA9B-4A81-9847-989FA5895402.mov';
        const newMessage = `Duck yes`
        await interaction.editReply({
            content: newMessage,
            files: [{
                attachment: duckgif,
                name: 'duck.mov'
            }]
        });
    }
}