const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_SCHEDULED_EVENTS",
        "GUILD_WEBHOOKS"
    ]
})

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

;['commandHandler', 'eventHandler'].forEach(handler => {
        require(`./handlers/${handler}`)(client, Discord)
})

/*
client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply("Hey!")
    }
*/

const welcomeChannelID = "619296382611750916"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)