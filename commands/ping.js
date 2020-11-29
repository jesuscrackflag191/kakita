const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: "Este es el comando de ping",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle(":ping_pong: Pong!")
        .setColor("GREEN")
        .setDescription(`Estoy bien!?`)
        .addFields(
            { name: '**Ping del Bot**', value: `1603587782079ᵐˢ`, inline: true },
            { name: '**Estado**', value: 'HORRIBLE AHH', inline: true })
        message.channel.send(embed);

    }
}

