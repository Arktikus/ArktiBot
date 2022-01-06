module.exports = {
    name: 'ping',
    description: "Ping...",
    execute(client, message, args, Discord) {
        message.channel.send("Ping, or was it Pong?")
    }
}