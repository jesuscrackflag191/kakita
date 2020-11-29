module.exports = {
    name: 'say',
    description: "con este comando se habla",
    execute(message, args){
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
    }
}