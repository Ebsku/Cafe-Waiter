const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const NetworkSpeed = require("network-speed");
const testNetworkSpeed = new NetworkSpeed();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("internet")
        .setDescription("Return information about my internet!"),

    async execute(interaction, client) {
        var downloadspeed = 100;
        var uploadspeed = 100;
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        async function getNetworkDownloadSpeed() {
            const baseUrl = "https://eu.httpbin.org/stream-bytes/500000";
            const fileSizeInBytes = 500000;
            var speed = await testNetworkSpeed.checkDownloadSpeed(
                baseUrl,
                fileSizeInBytes
            );
            downloadspeed = speed.mbps;
            console.log(downloadspeed);
        }

        getNetworkDownloadSpeed();

        async function getNetworkUploadSpeed() {
            const options = {
                hostname: "www.google.com",
                port: 80,
                path: "/catchers/544b09b4599c1d0200000289",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const fileSizeInBytes = 2000000;
            var speed = await testNetworkSpeed.checkUploadSpeed(
                options,
                fileSizeInBytes
            );
            uploadspeed = speed.mbps;
            console.log(uploadspeed);
        }
        getNetworkUploadSpeed();

        const embed = new EmbedBuilder()
            .setColor(client.colour)
            .setTitle("**Internet**")
            .setThumbnail(
                "https://openclipart.org/image/2400px/svg_to_png/194821/wifi.png"
            )
            .addFields([
                {
                    name: "**ISP**",
                    value: "DNA",
                    inline: true,
                },
                {
                    name: "**Speed**",
                    value: `Download: ${downloadspeed}\nUpload: ${uploadspeed}`,
                    inline: true,
                },
                {
                    name: "**Ping**",
                    value: `API Latency: ${client.ws.ping}\nClient Ping: ${
                        message.createdTimestamp - interaction.createdTimestamp
                    }`,
                    inline: true,
                },
                {
                    name: "**Location**",
                    value: "Päijät-Häme, Finland",
                    inline: true,
                },
            ]);

        await interaction.editReply({
            embeds: [embed],
        });
    },
};
