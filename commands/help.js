module.exports = {
    name: 'help',
    description: "Helps you!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Help')
        .setURL('https://twitch.tv/arktikustwtich')
        .setDescription('Helping for noobs')
        .addFields(
            {name: 'General Commands', value: '.ping'},
            {name: 'Social Media', value: '.twitter'}
        )
        .setImage('https://hifi.de/wp-content/uploads/2020/08/anime-streaming-dienste-augen-1100x550.jpg')
        .setFooter('Hope this helpes you!')

        .send(newEmbed);
    }
}