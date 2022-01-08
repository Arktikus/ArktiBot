module.exports = {
    name: 'website',
    description: "Sends my Website link",
    execute(client, message, args, Discord) {
        message.channel.send('https://arktikus.eu/')
    }
}