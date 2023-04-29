const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("about")
        .setDescription("Return message with info about the bot!"),

    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setURL('https://github.com/Ebsku/Cafe-Waiter')
            .setLabel('Github')
            .setStyle(ButtonStyle.Link);
            

        const embed = new EmbedBuilder()
            .setColor(client.colour)
            .setTitle('**About me**')
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .addFields([
            {
                name: '**Version**',
                value: `${client.version}`,
                inline: true

            },
            {
                name: '**Author**',
                value: 'Ebsku#0949',
                inline: true
            },
            {
                name: '**Support server**',
                value: 'https://discord.gg/UwcQBWF6vF',
                inline: true
            }
            ]);

        await interaction.reply({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }        
}