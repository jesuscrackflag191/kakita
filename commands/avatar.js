const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
    description: "Este es el comando de embed",
    execute(message, args){

        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        const avatarEmbed = new Discord.MessageEmbed()
        .setTitle(`Avatar de ${mentionedUser.username}`)
        .setImage(`${mentionedUser.displayAvatarURL()}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${mentionedUser.username}`)
        .setTimestamp();
        message.channel.send(avatarEmbed);


    }   
}

