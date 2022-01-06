module.exports = {
    name: 'twitter',
    description: "Sends my Twitter link",
    execute(client, message, args, Discord) {
        message.channel.send('https://twitter.com/ArktikusT')
    }
}