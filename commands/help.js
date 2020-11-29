const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: "Este es el comando de embed",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("Rojo Help")
        .setColor("BLUE")
        .setDescription(`
        __**Command list**__
        > \`Info\`
        > \`Moderation\`
        > \`Fun\`
        > \`NFSW\` `)
        .setFooter("PandaRetard", "https://media.giphy.com/media/7C5dOWxcNNbk6bVBNi/giphy.gif")
        .setTimestamp();     
        message.channel.send(embed);

    }
}
