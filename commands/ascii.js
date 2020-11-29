const figlet = require('figlet');

module.exports = {
    name: "ascii",
    description: "Converts text to ascii",
    execute(message, args){
        if(!args[0]) return message.channel.send('Oye, pon un texto');

        msg = args.join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.channel.send('Porfavor no pongas un Texto tan largo')

            message.channel.send('```' + data + '```')
        })
    }
}