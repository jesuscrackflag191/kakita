const { executionAsyncResource } = require('async_hooks');
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const { YTSearcher } = require('ytsearcher');
const client = new Discord.Client();
const queue = new Map();
jesus = ("Hola")
const prefix = 'r!';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.on('ready', () => {
  console.log(`Inciado Como: ${client.user.tag}!`)
  client.user.setPresence( {
  
    activity: {name: `r!help | Estoy en 2 servidores.`,
    type: "PLAYING"},
    status:"online"});})
    client.setMaxListeners (200)
    
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);

    } else if(command === 'say'){
        client.commands.get('say').execute(message, args);

    } else if(command === 'ascii'){
        client.commands.get('ascii').execute(message, args);

    } else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);

    } else if(command === 'autoroles'){
        client.commands.get('autoroles').execute(message, args);

    } else if(command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);

    } else if(command === 'meme'){
        client.commands.get('meme').execute(message, args);

    } else if(command === 'userinfo'){
        client.commands.get('userinfo').execute(message, args);

    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);

    } else if(command === '8ball'){
        client.commands.get('8ball').execute(message, args);

    } else if(command === 'sugerencias'){
        client.commands.get('sugerencias').execute(message, args);

    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);


    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    
    
});
 

client.on('message', msg => {
    if (msg.author == client.user){return}
    if (msg.author.id == "159985870458322944"){return}
    let message = msg.content.toLowerCase()
    if(message.includes(".-.")) {
      msg.channel.send('**.-.**')
    }});

  
    client.on('message', msg => {
      if (msg.author == client.user){return}
      if (msg.author.id == "159985870458322944"){return}
      let message = msg.content.toLowerCase()
      if(message.includes("bale")) {
        msg.channel.send('https://pbs.twimg.com/media/EVlHOdhXkAAI82i.jpg')
      }});


      client.on('message', msg => {
        if (msg.author == client.user){return}
        if (msg.author.id == "159985870458322944"){return}
        let message = msg.content.toLowerCase()
        if(message.includes(".-.")) {
          msg.channel.send(jesus)
        }});
    


    client.on('message', msg => {
        if(msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
           || msg.content.includes('wda')
          ){msg.delete()
          }});
      

          client.on('message', message => {
  
            console.log(message.content)
            if (message.content === 'r!help info') {
              const embed = new Discord.MessageEmbed()
                .setTitle("Rojo Help")
                .setColor("BLUE")
                .setThumbnail(message.guild.icon)
                .setDescription(`
                __**Info list**__
                > \`serverinfo\`
                > \`avatar\`
                > \`userinfo\` `)
                .setFooter("PandaRetard", "https://media.giphy.com/media/7C5dOWxcNNbk6bVBNi/giphy.gif")
                .setTimestamp();     
                message.channel.send(embed);
            }
          });

          const searcher = new YTSearcher({
            key: process.env.youtube_api,
            revealed: true
        });
        


        client.on("message", async(message) => {

            const serverQueue = queue.get(message.guild.id);
        
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase();
        
            switch(command){
                case 'play' : "p"
                    execute(message, serverQueue);
                    break;
                case "p" :
                    execute(message, serverQueue);
                    break;    
                case 'stop':
                    stop(message, serverQueue);
                    break;
                case 'skip':
                    skip(message, serverQueue);
                    break;
                case 's':
                        skip(message, serverQueue);
                        break;        
                case 'pause':
                    pause(serverQueue);
                    break;
                case 'p':
                    pause(serverQueue);
                    break;
                case 'resume':
                    resume(serverQueue);
                    break;
                case 'loop':
                    Loop(args, serverQueue);
                    break;
                case 'queue':
                    Queue(serverQueue);
                    break;
                case 'q':
                    Queue(serverQueue);
                    break;
                }
        
            async function execute(message, serverQueue){
                let vc = message.member.voice.channel;
                if(!vc){
                    return message.channel.send("Porfavor unase a un canal de voz");
                }else{
                    let result = await searcher.search(args.join(" "), { type: "video" }) 
                    const songInfo = await ytdl.getInfo(result.first.url)
        
                    let song = {
                        title: songInfo.videoDetails.title,
                        url: songInfo.videoDetails.video_url
                    };
        
                    if(!serverQueue){
                        const queueConstructor = {
                            txtChannel: message.channel,
                            vChannel: vc,
                            connection: null,
                            songs: [],
                            volume: 10,
                            playing: true,
                            loopone: false,
                            loopall: false
                        };
                        queue.set(message.guild.id, queueConstructor);
        
                        queueConstructor.songs.push(song);
        
                        try{
                            let connection = await vc.join();
                            queueConstructor.connection = connection;
                            play(message.guild, queueConstructor.songs[0]);
                        }catch (err){
                            console.error(err);
                            queue.delete(message.guild.id);
                            return message.channel.send(`No se puede unir al chat de voz ${err}`)
                        }
                    }else{
                        serverQueue.songs.push(song);
                        return message.channel.send(`La musica se ha añadido Xd ${song.url}`);
                    }
                }
            }
            function play(guild, song){
                const serverQueue = queue.get(guild.id);
                if(!song){
                    serverQueue.vChannel.leave();
                    queue.delete(guild.id);
                    return;
                }
                const dispatcher = serverQueue.connection
                    .play(ytdl(song.url))
                    .on('finish', () =>{
                        if(serverQueue.loopone){  
                            play(guild, serverQueue.songs[0]);
                        }
                        else if(serverQueue.loopall){
                            serverQueue.songs.push(serverQueue.songs[0])
                            serverQueue.songs.shift()
                        }else{
                            serverQueue.songs.shift()
                        }
                        play(guild, serverQueue.songs[0]);
                    })
                    serverQueue.txtChannel.send(`Reproduciendo ahora: ${serverQueue.songs[0].title}`)
            }
            function stop (message, serverQueue){
                if(!message.member.voice.channel)
                    return message.channel.send("Primero debes unirte al chat de voz!")
                serverQueue.songs = [];
                serverQueue.connection.dispatcher.end();
            }
            function skip (message, serverQueue){
                if(!message.member.voice.channel)
                    return message.channel.send("Primero debes unirte al chat de voz");
                if(!serverQueue)
                    return message.channel.send("No hay nada que saltarse!");
                serverQueue.connection.dispatcher.end();
            }
            function pause(serverQueue){
                if(!serverQueue.connection)
                    return message.channel.send("No hay música actualmente en reproducción!");
                if(!message.member.voice.channel)
                    return message.channel.send("No estás en el canal de voz!")
                if(serverQueue.connection.dispatcher.paused)
                    return message.channel.send("La cancion ya esta pausada");
                serverQueue.connection.dispatcher.pause();
                message.channel.send("La canción se ha detenido!");
            }
            function resume(serverQueue){
                if(!serverQueue.connection)
                    return message.channel.send("No hay música actualmente en reproducción");
                if(!message.member.voice.channel)
                    return message.channel.send("No estás en el canal de voz!")
                if(serverQueue.connection.dispatcher.resumed)
                    return message.channel.send("La canción ya está sonando!");
                serverQueue.connection.dispatcher.resume();
                message.channel.send("La canción ha sido reanudada!");
            }
            function Loop(args, serverQueue){
                if(!serverQueue.connection)
                    return message.channel.send("No hay música en este momento!");
                if(!message.member.voice.channel)
                    return message.channel.send("No estás en el canal de voz!")
        
                switch(args[0].toLowerCase()){
                   case 'all':
                       serverQueue.loopall = !serverQueue.loopall;
                       serverQueue.loopone = false;
        
                       if(serverQueue.loopall === true)
                           message.channel.send("El bucle se ha encendido!");
                       else
                            message.channel.send("El bucle se ha apagado!");
        
                       break;
                    case 'one':
                        serverQueue.loopone = !serverQueue.loopone;
                        serverQueue.loopall = false;
        
                        if(serverQueue.loopone === true)
                            message.channel.send("El primer bucle a sido activado");
                        else
                            message.channel.send("El primer bucle ha sido desactivado!");
                        break;
                    case 'off':
                            serverQueue.loopall = false;
                            serverQueue.loopone = false;
        
                            message.channel.send("¡El bucle se ha desactivado!");
                        break;
                    default:
                        message.channel.send("Especifique qué bucle desea. my!loop <uno / todos / apagado>"); 
                }
            }
            function Queue(serverQueue){
                if(!serverQueue.connection)
                    return message.channel.send("No hay música actualmente en reproducción!");
                if(!message.member.voice.channel)
                    return message.channel.send("No estás en el canal de voz!")
        
                let nowPlaying = serverQueue.songs[0];
                let qMsg =  `Reproduciendo ahora: ${nowPlaying.title}\n--------------------------\n`
        
                for(var i = 1; i < serverQueue.songs.length; i++){
                    qMsg += `${i}. ${serverQueue.songs[i].title}\n`
                }
        
                let sMsg = new Discord.MessageEmbed()
                .addField(qMsg, `Pedido por: ${message.author.username}`)
                .setColor("BLUE")
                message.channel.send(sMsg)
            }
        })
        

      
//Yo creo en ti, no importa lo que digan los demas, demuestrales que si vales y que puedes llegar a hacer mucho bien.

client.login(process.env.token);