const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fact")
        .setDescription("Return a random fact!"),

    async execute(interaction, client) {

        const getfact = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
        let fact = await getfact.json();

        const embed = new EmbedBuilder()
            .setColor(client.colour)
            .setTitle(`**Here is your fact!**`)
            .setDescription(`${fact.text}`)
            .setURL(`${fact.permalink}`)

        await interaction.reply({
            embeds: [embed]
        });
    }
}