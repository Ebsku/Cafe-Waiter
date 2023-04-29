require("dotenv").config();
const { api_key } = process.env;
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("search")
        .setDescription("Return images found from the web!")
        .addStringOption((option) =>
            option
                .setName("query")
                .setDescription("The image to find!")
                .setRequired(true)
        ),

    async execute(interaction, client) {
        const getImage = await fetch(
            "https://api.pexels.com/v1/search?query=" +
                interaction.options.getString("query") +
                "&per_page=1&page=1",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: api_key,
                },
            }
        );

        const image = await getImage.json();

        if (image.photos[0] == null) {
            await interaction.reply({
                content: `I could not find anything with the query **${interaction.options.getString(
                    "query"
                )}**.`,
                ephemeral: true,
            });
            return;
        }

        const embed = new EmbedBuilder()
            .setColor(client.colour)
            .setTitle("Here is your image")
            .setImage(image.photos[0].src.original)
            .setDescription(
                `Photo taken by: ${image.photos[0].photographer} \nProvided by: https://pexels.com`
            );

        await interaction.reply({
            embeds: [embed],
        });
    },
};
