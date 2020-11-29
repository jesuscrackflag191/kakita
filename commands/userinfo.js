const Discord = require("discord.js")

module.exports = {
    name: "userinfo",
    description: "Este comando muestra la informacion de un usuario",
    execute(message, args){

        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();

        const userEmbed = new Discord.MessageEmbed()
        .setTitle(`Informacion del usuario ${mentionedUser.username}`) // Titulo - Recibimos el "user" y decimos su "username"
        .setColor(`#ff8000`)// Color para hacerlo mas bonito <3
        .setThumbnail(mentionedUser.displayAvatarURL({dynamic : true})) // Un Thumbnail de la foto de perfil del "user".
        .addFields(// Hacemos nuevas Fields
            {
                name: "Nombre: ",// Nombre - Titulo - Caso 1
                value: mentionedUser.username,
                inline: true // En linea: SI
            },
            {
                name: "#️⃣ Tag: ",// Nombre - Titulo - Caso 1
                value: `#${mentionedUser.tag}`,// Del "user" sacamos su tag / discriminador
                inline: true// En linea: SI
            },
            {
                name: "Estado: ",// Nombre - Titulo - Caso 1
                value: `${mentionedUser.presence.status}`,// Del "user" sacamos su tag / discriminador
                inline: true// En linea: SI
            },
            {
                name: "🆔 ID: ",// Nombre - Titulo - Caso 1
                value: mentionedUser.id,// Del "user" sacamos su ID
            },
            {
                name: 'Avatar link: ',// Nombre - Titulo - Caso 1
                value: `[Pinche Aquí](${mentionedUser.displayAvatarURL()})`// Del "user" obtenemos su Avatar Link, Hacemos que dentro del Array se encuentre el Link y cuando se de Click te reenviara una pagina viendo el avatar del "user"
            },
            {
              name: 'Dato de creacion: ',// Nombre - Titulo - Caso 1
              value: mentionedUser.createdAt
          },
          {
            name: 'Se unio al server el: ',// Nombre - Titulo - Caso 1
            value: mentionedMember.joinedAt
        },
        )
          message.channel.send(userEmbed);

    }
}