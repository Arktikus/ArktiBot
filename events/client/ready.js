module.exports = (Discord, client) => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity({name: "Moderating the hood", type: "COMPETING"})
}