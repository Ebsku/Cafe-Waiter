module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        setInterval(client.pickPresence, 60 * 1000);
        console.log(`Logged in as ${client.user.tag}!`);
    }
}