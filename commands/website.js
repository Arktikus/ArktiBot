module.exports = {
    name: 'website',
    description: "Sends my Website link",
    aliases: 'homepage',
    execute(client, message, args, Discord) {
        message.channel.send('https://arktikus.eu/')
    }
}