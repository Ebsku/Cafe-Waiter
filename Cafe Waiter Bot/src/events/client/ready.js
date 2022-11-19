module.exports = {
    name: 'ready',
    once: true,
    async execute() {
        console.log(`Logged in as ${client.user.tag}!`)
    }
}