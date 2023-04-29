const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("Return your message!")
        .addStringOption((option) => option.setName('message').setDescription('The message to return').setRequired(true))
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageMessages),

    async execute(interaction, client) {
        interaction.reply({ content: `Message sent succesfully!`, ephemeral: true });
        await interaction.channel.send({ content: interaction.options.getString('message') })
    }
}