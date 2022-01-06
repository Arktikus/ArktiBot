module.exports = {
    name: 'youtube',
    description: "Sends my Youtube link",
    execute(client, message, args, Discord) {
        message.channel.send('https://www.youtube.com/channel/UCGKtriGXIeNqWOMuG3MDa5w')
    }
}