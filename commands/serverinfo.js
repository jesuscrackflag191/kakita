const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "Converts text to ascii",
    execute(message, args){
const embed = new Discord.MessageEmbed()
.setTitle(message.guild)
.setThumbnail(message.guild)
.addField("ID:", message.guild.id )
.addField("Region:", message.guild.region)
.addField("Servidor creado el:", message.guild.createdAt)
.addField('Dueño del Servidor', message.guild.owner)
.addField('Miembros:', (message).guild.memberCount )
.addField('Roles:', message.guild.roles.cache.size)
.setColor("RANDOM")
.setTimestamp()
message.channel.send(embed);

    }
}