module.exports = {
    name: 'twitch',
    description: "Sends my Twitch link",
    execute(client, message, args, Discord) {
        message.channel.send('https://www.twitch.tv/arktikustwitch/')
    }
}