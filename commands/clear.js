module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
        if (!args[0]) return message.reply("Pon un numero");
 
        if(isNaN(args[0])) return message.reply("Porfavor pon un numero");
 
        if(args[0] > 100) return message.reply("No puedes eliminar mas de 100 mensajes");
        
        if(args[0] < 1) return message.reply("Tienes que borrar al menos un mensaje");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
 
}  