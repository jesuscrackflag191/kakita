const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    description: "Este es el ejemplo para no escribir",
    execute(message, args){
        if(!args[2]) return message.reply("Porfavor pon una pregunta");
        let replies = ["Yes", "No", "Talvez"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(1).join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("YELLOW")
        .addField("pregunta", question)
        .addField("Respuesta", replies[result]);

        message.channel.send(ballembed)

    }
}