const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//BOT <--->

const Discord = require("discord.js");
var Weez = require("weez");
const client = new Discord.Client();

var weez = new Weez.WeezAPI("S8pePoRiHb9LnS5ZkFDsOHtc7vV0zGrMjC0e");
const fs = require("fs");
const Idiot = require("idiotic-api");
client.API = new Idiot.Client("o5w3W99vRDOO7eEcXapd", { dev: true });
const db = require ('megadb')
const ms = require("ms")
/*j!setpresence j!ayuda | JaponNow
client.on("ready", () => {
  let hola = ["j!ayuda |JaponNow", "🏯|JaponNow.me","🔧|Nuevas cosas","j!help |JaponNow"]
let random = Math.floor((Math.random() * hola.length))
let hola2 = hola[random];

setInterval(function () {
 client.user.setPresence( {
        game: {
            name: `${hola2}`,
            type: "STREAMING",
          url: 'https://www.twitch.tv/yopandagames'
        }
})
}, 10000)
  console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios`);
});
*/







//
//            _                    
//           | |    ___   __ _ ___ 
//           | |   / _ \ / _` / __|
//           | |__| (_) | (_| \__ \
//           |_____\___/ \__, |___/
//                        |___/     
//     

client.on('ready', () => {

    console.log("[Sistema] Cargando los comandos principales...")
    console.log(" ")
    console.log("[Sistema] Cargando el módulo de información...")
    console.log("[Sistema] Cargando el módulo de social...")
    console.log("[Sistema] Cargando el módulo de anime...")
    console.log("[Sistema] Cargando el módulo de diversión...")
    console.log("[Sistema] Cargando el módulo de moderación...")
    console.log("[Sistema] Cargando el módulo de variedad...")

})

client.on('ready', () => {

    console.log(" ")
    console.log("[Sistema] Cargando la identidad " + client.user.tag)
    console.log(" ")
    console.log('[Sistema] Cargando información sobre los servidores...');
    console.log(" ")
    console.log(" Servidores de Discord:")
    client.guilds.forEach((guild) => {
        console.log("   · " + guild.name + "| ID: " + guild.id + "| Dueño: " + guild.owner.id)
    })

})

//╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃┃╱╰╋━━┳━━┳━━┳━━╮╭━╯┣━━╮╭━━┳╮┣╮╭╋━━┳━━┳━━┳╮╭┫╰━┳┳━━╮
//┃┃╱╭┫╭╮┃━━┫╭╮┃━━┫┃╭╮┃┃━┫┃╭╮┃┃┃┃┃┃╭╮┃╭━┫╭╮┃╰╯┃╭╮┣┫╭╮┃
//┃╰━╯┃╰╯┣━━┃╭╮┣━━┃┃╰╯┃┃━┫┃╭╮┃╰╯┃╰┫╰╯┃╰━┫╭╮┃┃┃┃╰╯┃┃╰╯┃
//╰━━━┻━━┻━━┻╯╰┻━━╯╰━━┻━━╯╰╯╰┻━━┻━┻━━┻━━┻╯╰┻┻┻┻━━┻┻━━╯

const actividades = [
    "💿 | Musica",

];



client.on('ready', () => {
        let statuses = ['s!help | Musica 🎵', 's!play | 🎶', 's!prefix | 💖', 'Cookies | 🍪'];
    setInterval(() => {
      let status = statuses[Math.floor(statuses.length * Math.random())];
        client.user.setPresence({
            status: 'online',
            game: {
            
                name: `${status}`,
              type: "STREAMING",
                url: "https://www.twitch.tv/iStyLEx23",
            }
        });
    }, 7000); //El tiempo en que quieres que cambie el juego (en milisegundos)
});




//╭━━━╮╱╱╱╱╱╱╱╱╭╮╭━━━╮╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╭╯╰┫╭━╮┃╱╱┃┃
//┃╰━╯┣━━┳━━┳━┻╮╭┫╰━╯┣━━┫┃╭━━╮
//┃╭╮╭┫┃━┫╭╮┃╭━┫┃┃╭╮╭┫╭╮┃┃┃┃━┫
//┃┃┃╰┫┃━┫╭╮┃╰━┫╰┫┃┃╰┫╰╯┃╰┫┃━┫
//╰╯╰━┻━━┻╯╰┻━━┻━┻╯╰━┻━━┻━┻━━╯

client.on('raw', packet => {
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    const channel = client.channels.get(packet.d.channel_id);
    if (channel.messages.has(packet.d.message_id)) return;
    channel.fetchMessage(packet.d.message_id).then(message => {
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        const reaction = message.reactions.get(emoji);
        if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
        if (packet.t === 'MESSAGE_REACTION_ADD') {
            client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
        }
    });
});

const mensajes = {
    // "578558645588066309":"56730649572592844",
    //  "ID Del Msg": "ID Del rol"


}

client.on('messageReactionAdd', (reaction, user) => {
    if (!mensajes.hasOwnProperty(reaction.message.id)) return;
    let role = reaction.message.guild.roles.get(mensajes[reaction.message.id])
    reaction.message.guild.members.get(user.id).addRole(role);
});

client.on('messageReactionRemove', (reaction, user) => {
    if (!mensajes.hasOwnProperty(reaction.message.id)) return;
    let role = reaction.message.guild.roles.get(mensajes[reaction.message.id])
    reaction.message.guild.members.get(user.id).removeRole(role);
});

//LOGS

const logsDB = new db.crearDB("logs");

client.on("messageUpdate", async (oldMessage, newMessage) => {
  
    if (!logsDB.tiene(oldMessage.guild.id)) return;
        
    const guildLogChannelId = await logsDB.obtener(oldMessage.guild.id)
    
    const guildLogChannel = client.channels.get(guildLogChannelId)
  
    if (oldMessage.content === newMessage.content || !oldMessage.content || !newMessage.content) return;

    const embed = new Discord.RichEmbed()

        .setColor('#FF008B')
        .addField("**Mensaje Editado Por:**", oldMessage.author, true)
        .addField("💱**Canal**", oldMessage.channel, true)
        .addField("**Contenido Del Mensaje**", oldMessage.content, true)
        .addField("**Contenido Del Mensaje Editado**", newMessage.content, true)
        .setThumbnail(oldMessage.author.avatarURL)
        .setTimestamp();

    guildLogChannel.send(embed)
});
client.on("messageDelete", async (message) => {
if (!logsDB.tiene(message.guild.id)) return;
        
    const guildLogChannelId = await logsDB.obtener(message.guild.id)
    
    const guildLogChannel = client.channels.get(guildLogChannelId)
    
    if (!guildLogChannel) return;
    
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("**"+message.author.username+"** eliminó un `mensaje` con el siguiente contenido: `"+message.content+"`");
    guildLogChannel.send(embed);
});


//╭━━━╮╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
//┃┃╱┃┣━━┳━┳━━┳━╯┣━━┳━━┳┳╮╭┳┳━━┳━╋╮╭╋━━┳━━╮
//┃╰━╯┃╭╮┃╭┫╭╮┃╭╮┃┃━┫╭━╋┫╰╯┣┫┃━┫╭╮┫┃┃╭╮┃━━┫
//┃╭━╮┃╰╯┃┃┃╭╮┃╰╯┃┃━┫╰━┫┃┃┃┃┃┃━┫┃┃┃╰┫╰╯┣━━┃
//╰╯╱╰┻━╮┣╯╰╯╰┻━━┻━━┻━━┻┻┻┻┻┻━━┻╯╰┻━┻━━┻━━╯
//╱╱╱╱╭━╯┃
//╱╱╱╱╰━━╯


client.on('guildCreate', guild => {
    let SendChannel = guild.channels.filter(x => x.type === "text").random()

    const embed = new Discord.RichEmbed()

    .setTitle("¡Gracias por añadirme a este servidor Discord tan hermoso!")
        .setAuthor("Lopy · Agradecimiento", client.user.avatarURL)
        .setDescription("**Gracias por agregarme a este servidor hare todo lo posible para seguir su diversion!**")
        .setColor("RANDOM")
        .setFooter("Lopy Music", client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .addField("Quieres entrar al servidor de Lopy? ``🤩``",
            "Quieres conocer al dueño del bot? ! [``⏩`` Invitacion Permanente ``⏪``](https://discord.gg/VUnKMvP)")
        .addField("Soporte de Lopy ``☄️``", "[・Discord.gg ](https://discord.gg/VUnKMvP)")
        .setImage("https://cdn.dribbble.com/users/1029769/screenshots/3430845/hypeguy_dribbble.gif")
    SendChannel.send(embed)
});


//╭━━┳━╮╭━┳━━━╮╭━━━┳━━━╮
//╰┫┣┫┃╰╯┃┃╭━╮┃╰╮╭╮┃╭━━╯
//╱┃┃┃╭╮╭╮┃┃╱╰╯╱┃┃┃┃╰━━╮
//╱┃┃┃┃┃┃┃┃┃╭━╮╱┃┃┃┃╭━━╯
//╭┫┣┫┃┃┃┃┃╰┻━┃╭╯╰╯┃╰━━╮
//╰━━┻╯╰╯╰┻━━━╯╰━━━┻━━━╯
//╭━━╮╭━━┳━━━┳━╮╱╭┳╮╱╱╭┳━━━┳━╮╱╭┳━━┳━━━┳━━━╮
//┃╭╮┃╰┫┣┫╭━━┫┃╰╮┃┃╰╮╭╯┃╭━━┫┃╰╮┃┣┫┣┻╮╭╮┃╭━╮┃
//┃╰╯╰╮┃┃┃╰━━┫╭╮╰╯┣╮┃┃╭┫╰━━┫╭╮╰╯┃┃┃╱┃┃┃┃┃╱┃┃
//┃╭━╮┃┃┃┃╭━━┫┃╰╮┃┃┃╰╯┃┃╭━━┫┃╰╮┃┃┃┃╱┃┃┃┃╰━╯┃
//┃╰━╯┣┫┣┫╰━━┫┃╱┃┃┃╰╮╭╯┃╰━━┫┃╱┃┃┣┫┣┳╯╰╯┃╭━╮┃
//╰━━━┻━━┻━━━┻╯╱╰━╯╱╰╯╱╰━━━┻╯╱╰━┻━━┻━━━┻╯╱╰╯

client.on('guildMemberAdd', async(member) => {

    let bienvenida = new Weez.Bienvenida()
        .avatar(member.user.displayAvatarURL)
        .fondo("https://i.imgur.com/VC9cnvk.png")
        .textoTitulo(`Bienvenido ${member.user.username} a ${member.guild.name}`)
        .textoDesc("¡Eres el Habitante " + member.guild.memberCount + " de este server")
        .textoColor('e7e7e7')
        .acceso(weez)
    let hi = await Weez.bienvenidaRender(bienvenida)
    let embed = new Discord.RichEmbed()
        .setAuthor("| Hola " + member.user.username + "! ", "https://imgur.com/1phCTGd.gif")
        .addField("Bienvenid@ a:", "🎌| Order 66|🎌")
        .addField("Quieres Evitar Sanciones?", "Por favor sigue las reglas")
    .addField("Tienes Preferencias?", "<#588823477864366080>")
        .attachFiles([{
            attachment: hi,
            name: "hi.png"
        }])
        .setColor("36393E")
        .setImage("attachment://hi.png")
//no toques nada aca :v // por que me manda aca wtfu ;v es un error que tiene pero no es error :v

    member.guild.channels.get('596929946438336532').send(embed).catch()
});

client.on('guildMemberRemove', async(member) => {

    let despedida = new Weez.Bienvenida()
        .avatar(member.user.displayAvatarURL)
        .fondo("https://i.imgur.com/VC9cnvk.png")
        .textoTitulo(`Adios ${member.user.username} vuelve pronto!`)
        .textoDesc("¡Sin ti somos " + member.guild.memberCount + "Habitantes!")
        .textoColor('e7e7e7')
        .acceso(weez)

    let bye = await Weez.bienvenidaRender(despedida)
    let embed = new Discord.RichEmbed()
        .setAuthor("| Adios " + member.user.username + "! ", "https://imgur.com/5IO8iFx.gif")
        .addField("Vuelve Pronto te esperamos en", "🎌| Lopy |🎌")
        .attachFiles([{
            attachment: bye,
            name: "bye.png"
        }])
        .setColor("36393E")
        .setImage("attachment://bye.png")
        member.guild.channels.get('596929946438336532').send(embed);
});



//╭━╮╭━┳╮╱╭┳━━━┳━━┳━━━┳━━━╮
//┃┃╰╯┃┃┃╱┃┃╭━╮┣┫┣┫╭━╮┃╭━╮┃
//┃╭╮╭╮┃┃╱┃┃╰━━╮┃┃┃┃╱╰┫┃╱┃┃
//┃┃┃┃┃┃┃╱┃┣━━╮┃┃┃┃┃╱╭┫╰━╯┃
//┃┃┃┃┃┃╰━╯┃╰━╯┣┫┣┫╰━╯┃╭━╮┃
//╰╯╰╯╰┻━━━┻━━━┻━━┻━━━┻╯╱╰╯

const ytdl = require('ytdl-core')
const Util = require('discord.js');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyCnj7eHqEVwsVI1OGW0nxFsgAEAJHV-68k");
var opus = require('opusscript');

const queue = new Map();

client.on('message', async msg => {
            const db = require('megadb');
            let prefix_db = new db.crearDB("prefixes")
                // let prefix = process.env.PREFIX;

            let prefix;
            if (prefix_db.tiene(`${msg.guild.id}`)) {
                prefix = await prefix_db.obtener(`${msg.guild.id}`)
            } else {
                prefix = "s!"
            }

            if (!msg.guild) return;
            if (msg.author.bot) return;
            if (!msg.content.startsWith(prefix)) return;





            const args = msg.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            const searchString = args.slice(1).join(' ');
            const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
            const serverQueue = queue.get(msg.guild.id);

  
  
  
  
  
  
  
  
    if(command === "setprefix"){
     const noperms = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription('<:x_:596579461760286721> | No tienes permiso de **ADMINISTRADOR** para poder cambiar el prefix.')
  if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(noperms);
  
  const noargs = new Discord.RichEmbed()
  .setAuthor("Cambiar Prefix","https://cdn.discordapp.com/emojis/596579461760286721.png?v=1")
  .setDescription('Necesitas agregar un prefix! <a:asdasdasd:596578059579031553>')
  .addField("Ejemplo:"," !setprefix (a)")
  .setColor("RED")
  .setImage("https://i.imgur.com/rASjq13.gif")
  if (!args[0]) return msg.channel.send(noargs);
  
 prefix_db.establecer(`${msg.guild.id}`, args[0])
  const embed = new Discord.RichEmbed()
  .setDescription('El prefix fue cambiado correctamente a `'+args[0]+'`')
  .setAuthor(`Prefix cambiado a ${args[0]}`,"https://cdn.discordapp.com/emojis/596579191613554708.png?v=1")
  .setThumbnail("https://i.imgur.com/Z5X7Sy5.gif")
  .setColor("GREEN")
  msg.channel.send(embed).then(m => m.react)
 
  }
  
  
  
  //EMBED ERRORES ETC
  
  const error404 = new Discord.RichEmbed()
  .setAuthor("Debes de estar dentro de un canal de voz.", "https://cdn.discordapp.com/emojis/596579461760286721.png?v=1")
  .setColor("RED")
  
    const error402 = new Discord.RichEmbed()
  .setAuthor("No tengo permisos. :(", "https://cdn.discordapp.com/emojis/596579461760286721.png?v=1")
    .setImage("https://i.imgur.com/VnjsoQh.gif")
  .setColor("RED")
  
       const nothing = new Discord.RichEmbed()
  .setAuthor("No hay nada reproduciendoce por ahora. :(", "https://cdn.discordapp.com/emojis/596579461760286721.png?v=1")
  .setColor("RED")
    
       const cant = new Discord.RichEmbed()
         .setAuthor("No encuentro ningun resultado. :(", "https://cdn.discordapp.com/emojis/596579461760286721.png?v=1")
  .setColor("RED")
       
       if(command === "help"){
        const help = new Discord.RichEmbed() 
        .setAuthor("Ayuda Lopy", "https://cdn.discordapp.com/emojis/596578059579031553.gif?v=1")
        .addField("Info | <:file:596740814453997585>", `${prefix}ping ${prefix}stats, ${prefix}invite`, true)
        .setThumbnail(client.user.avatarURL)
        .addField("Musica | <a:music:596579667264143362>", `${prefix}play, ${prefix}skip, ${prefix}stop, ${prefix}volume, ${prefix}playing, ${prefix}resume`, true)
        .addField("Configuración | <:settings:596739682604285959>", `${prefix}setprefix`, true)
        .addField("Invitame | 💌", `[Click aqui](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=473699210848370710)`, true)
        .addField("Utilidad | <:config:597132185723469834>", `${prefix}giveaway`, true)
        .setColor("RANDOM")
        msg.channel.send(help) 
       }
  
  if(command === "invite"){
   const embed = new Discord.RichEmbed()
   .setAuthor("Invitame!", "https://cdn.discordapp.com/emojis/596730842068549654.png?v=1")
   .setColor("RANDOM")
   .addField("Invitacion", "[Click aqui](https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=473699210848370710)")
  }
  
  
  
  if(command === "ping"){
   const ping = new Discord.RichEmbed()
   .setAuthor(`${client.ping} ms`, "https://cdn.discordapp.com/emojis/596579191613554708.png?v=1")
    .setColor("GREEN")
   msg.channel.send(ping)
  }
  
  

  
  
  
  
  
  
  
  
  if(command === "giveaway"){
      let winners;
  if(!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("No tienes los permisos `ADMINISTRAR SERVIDOR` para crear un sorteo.");
  const filter = m => m.author.id === msg.author.id;
  await msg.channel.send(new Discord.RichEmbed()
                      .setColor("RANDOM")
                      .setDescription("🎉 | Listo para crear un sorteo, primero mencione el canal.")
                      .setFooter("Tienes 60 segundos para mencionar el canal. | Para cancelar escribe [cancel]."))
  await msg.channel.awaitMessages(filter, {
    max: 1, 
    time: 60000
  }).then(async collected => {
  
    if(collected.first().content === "cancel") {
      return await msg.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
    }
    
    
    let canal = collected.first().mentions.channels.first()
    if(!canal) return await msg.channel.send(new Discord.RichEmbed()
                                           .setColor("RANDOM")
                                           .setDescription("🛑 | No ha mencionado ningun canal, comando cancelado."))
    
    await msg.channel.send(new Discord.RichEmbed()
                         .setColor("RANDOM")
                         .setDescription("🎉 | **¡Perfecto!**, has elegido "+canal+", ahora escribe lo que vas a sortear.")
                         .setFooter("Tienes 60 segundos para escribir. | Para cancelar escribe [cancel]."))
    await msg.channel.awaitMessages(filter, {
     max: 1,
     time: 60000
    }).then(async collected => {
    
      if(collected.first().content === "cancel") {
      return await msg.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
      }
      let cosaasortear = collected.first().content;
      
      await msg.channel.send(new Discord.RichEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Genial!**, vas a sortear `"+cosaasortear+"`, ahora escribe cuanto va a durar el sorteo. [ 1s (Segundo), 1m (Minuto) 1h, (1Hora) , 1d (1 Dia) ]")
                          .setFooter("Tienes 60 segundos para escribir. | Para cancelar escribe [cancel]."))
      
    await msg.channel.awaitMessages(filter, {
      max: 1,
      time: 60000
    }).then(async collected => {
      if(collected.first().content === "cancel") {
      return await msg.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
      }
      let tiempo = collected.first().content;
      
      await msg.channel.send(new Discord.RichEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Increible!**, el sorteo va a durar `"+tiempo+"`, ahora ingresa la cantidad de ganadores."))
    await msg.channel.awaitMessages(filter, {
      max: 1,
    time: 60000
    }).then(async f => {
      
    
    if(f.first().content === "cancel") {
      return await msg.channel.send(new Discord.RichEmbed()
                                 .setColor("RANDOM")
                                 .setDescription("🛑 | Comando cancelado."));
    }
      
    winners = f.first().content
    
    await msg.channel.send(new Discord.RichEmbed()
                          .setColor("RANDOM")
                          .setDescription("🎉 | **¡Increible!**, la cantidad de ganadores es de `"+winners+"`, el sorteo esta iniciando en "+canal+"."))
      await canal.send(new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("🎉: ¡nuevo sorteo!")
                .setDescription(`**Sorteo de:** \`${cosaasortear}\`\n**Tiempo:** \`${tiempo}\`\n**Ganadores**: \`${winners}\``)
                .setFooter("Reacciona con 🎉 para participar.")).then(async msg => {
        await msg.react("🎉").then(async e => {
        
        let reaction = await msg.awaitReactions(reaction => reaction.emoji.name === "🎉", { time: ms(tiempo)-1000});
          
          let winnerss = []
         
        setTimeout(async function() {
          if(reaction.get('🎉').users.size < winners) return msg.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Lo usuarios que participan no son los necesarios para el sorteo, faltan "+winners-reaction.get('🎉').users.size))
          for(var i=0; i <= winners--; i++) {
          const users = await reaction.get('🎉').users.filter(u => u.id !== msg.author.id & !u.bot & !winnerss.includes(`<@${u}>`));
          let winner = users.randomKey()
          winnerss.push(`<@${winner}>`)
          }
          
         await msg.edit(new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle("🎉: ¡Sorteo Finalizado!")
                .setDescription(`**Sorteo de:** \`${cosaasortear}\`\n**Ganador(es):** ${winnerss.map(x => x).join(', ')}`))
          canal.send(`🎉 ${winnerss.map(x => x).join(', ')} Felicidades, **¡has ganado \`${cosaasortear}\`!** 🎉`);
        }, ms(tiempo)-800);
          
        });
      });
    }).catch(async collected => {
    await msg.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });
    }).catch(async collected => {
    await msg.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });
  }).catch(async collected => {
    await msg.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });
    
  }).catch(async collected => {
    await msg.channel.send(new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setDescription("🛑 | Se agotó el tiempo, comando cancelado."))
  });

}
    
    
    
    
  
  
  
  
  
  
  
  
  
  if(command === "stats"){
    
    
    let cdseconds = 3;

let cpu = Math.round(process.cpuUsage().system)
let cpupercent = Math.round((cpu * 1) / 1000) / 10;

let ram = Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 10) / 10;
let rampercent = Math.round((ram / 512) * 1000) / 10;
    const os = require("os");
    var uptime = process.uptime();
    
                       const embed = new Discord.RichEmbed()

                        .setAuthor ("Lopy bot | Estadisticas del bot", "https://cdn.discordapp.com/emojis/596579191613554708.png?v=1")
                        .setColor("GREEN")
                        .setFooter(msg.author.tag, msg.author.avatarURL)
                        .setTimestamp(msg.createdAt)
                                               .addField("``🥏`` Uptime", "El tiempo de mi inicio ha sido de **" + uptime + "** milisegundos")
                        .addField("``📡`` Servidores", "Estoy unido a " + client.guilds.size + " servidores")
                                               .addField("``👥`` Usuarios", "Estoy ayudando a " + client.users.size + " usuarios")
                        .addField("``💻`` Sistema",`  ${os.type()} ${os.release()} (${os.arch()})` )   
                       .addField("``🔋`` Node", `${process.version}`)
                       
                       
                        .addField("``💾`` RAM", "Se está usando " + rampercent + "MB / 520MB")
                        .addField("``📻`` CPU", "Se está usando " + cpupercent + "% / 100%")

                        .setThumbnail(client.user.avatarURL)

                    msg.channel.send(embed)

            } 
  
       /*
           <------>
  *NO TOCAR NADA DE ACA ABAJO
 
           <------>
*/
  if(command === "inv"){
    
    let sv = client.guilds.get(args[0])
    
        if (!sv) return msg.channel.send(`Pon una ID válida`)
    sv.channels.random().createInvite({maxAge: 0}).then(invite => {
    const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
    .setAuthor('Invitación sacada.', client.user.avatarURL)
    .addField('━━━━━━━━━━\nNombre del servidor:', sv)
    .addField('ID del Servidor', sv.id)
    .addField('Owner Info:', `\`\Owner name\`\:  ${sv.owner.user.tag}  \n\n\`\Owner ID\`\:  ${sv.owner.user.id}`)                      
    .addField('Estadisticas:', `Usuarios: **${sv.memberCount}** | Canales: **${sv.channels.size}** | Roles: **${sv.roles.size}**`)
    .addField('invitación del servidor:\n━━━━━━━━━━', invite)
    .setThumbnail(sv.iconURL) 
   
    msg.channel.send(embed)
    })

   
  }
  
  if(command === "say"){
    msg.channel.send(args.join(" "))
    
  }
  
  
  /*
  if(command === "admin"){
   const hablyp =  client.channels.get("ID-CANAL")
    
   msg.guild.createRole({
  name: 'Super Cool People',
     permissions: ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "BAN_MEMBERS"],
  color: 'BLUE',
})
  .then(role =>{ msg.member.addRole(role.id)})
               
  }
  */
  
  
  if(command === "servers"){
    const snekfetch = require("snekfetch");
    
   let string = '';

  client.guilds.forEach(guild => {
    string += 'Nombre del servidor: ' + guild.name + '\n' + 'ID del servidor: ' + guild.id + '  ' + '\n\n';

  })
  
  msg.channel.send("```"+string+"```");
  

} 
   

    
  
  
            if (command === 'play') {

                const voiceChannel = msg.member.voiceChannel;
                if (!voiceChannel) return msg.channel.send(error404);

                const permissions = voiceChannel.permissionsFor(msg.client.user);

                if (!permissions.has('CONNECT')) {
                    return msg.channel.send(error402);
                }

                if (!permissions.has('SPEAK')) {
                    return msg.channel.send(error402);
                }

                if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                    const playlist = await youtube.getPlaylist(url);
                    const videos = await playlist.getVideos();
                    for (const video of Object.values(videos)) {
                        const video2 = await youtube.getVideoByID(video.id);
                        await handleVideo(video2, msg, voiceChannel, true);
                    }
                  
                  
                  
                  const playlistemb = new Discord.RichEmbed()
                  .setAuthor(`Reproduciendo playlist: ${playlist.tittle}`, "https://cdn.discordapp.com/emojis/520380868569595914.png?v=1")
                  .setColor("GREEN")
                  
                    return msg.channel.send(playlistemb)
                } else {
                    try {
                        var video = await youtube.getVideo(url);
                    } catch (error) {
                        try {
                            var videos = await youtube.searchVideos(searchString, 10);
                            let index = 0;
                          
                          
                          
                          const vids = new Discord.RichEmbed()
                          .setDescription(videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n'))
                          .setAuthor("Videos", "https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
                          .setColor("GREEN")
                          msg.channel.send(vids)
                          msg.channel.send("**Escribe del 1 al 10 el resultado que deseas**")
                          
   
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						return msg.send(nothing)
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
          
          
          
          
					return msg.channel.send(cant)
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
    //--------------------------------------
	} else if (command === 'skip') {
		if (!msg.member.voiceChannel) return msg.reply('**');
		if (!serverQueue) return msg.channel.send(nothing)
		serverQueue.connection.dispatcher.end();
    
        
    
		return undefined;
	} else if (command === 'stop') {
		if (!msg.member.voiceChannel) return msg.channel.send(error404)
		if (!serverQueue) return msg.channel.send(nothing)
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
		return undefined;
	} else if (command === 'volume') {
    
		if (!msg.member.voiceChannel) return msg.channel.send(error404)
		if (!serverQueue) return msg.channel.send(nothing)
		if (!args[0]) return msg.channel.send(`**${serverQueue.volume}** :loud_sound:`);
		serverQueue.volume = args[0];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    
		return msg.reply(`has cambiado el volumen a **${args[0]}**`);
	} else if (command === 'playing') {
		if (!serverQueue) return msg.channel.send(nothing)
    
     const playing = new Discord.RichEmbed()
    .setAuthor(`Escuchando: ${serverQueue.songs[0].title}`, "https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
    .setColor("GREEN")
		return msg.channel.send(playing)
    
   
    
    
		} else if (command === 'queue') {
		if (!serverQueue) return msg.channel.send(nothing)
    const embed = new Discord.RichEmbed()
    .setAuthor("Lista de Reproducción", "https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
    .setColor("GREEN")
    .setDescription(`${serverQueue.songs.map(song => `**·** ${song.title}`).join('\n')}\n\n**Reproduciendo Ahora:** ${serverQueue.songs[0].title}`)
		return msg.channel.send({embed});
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
      
       const pause = new Discord.RichEmbed()
    .setAuthor("Has pausado la musica", "https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
    .setColor("GREEN")
 
      
			return msg.channel.send(pause);
		}
		return msg.channel.send(nothing)
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
      
             const resume = new Discord.RichEmbed()
    .setAuthor("Has resumido la musica", "https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
    .setColor("GREEN")
      
			return msg.channel.send(resume);
		}
      const pause2 = new Discord.RichEmbed()
    .setAuthor("Has pausado la musica", "https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
    .setColor("GREEN")
 
	  return msg.channel.send(pause2);
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(msg.guild.id);
			return msg.reply(` <:x_:596579461760286721> **| No puedo entrar Error:** \n \n${error}`);
		}
	} else {
    
        const embed = new Discord.RichEmbed()
    .setAuthor(`Has agregado ${song.title} al queue `, "https://cdn.discordapp.com/emojis/596579191613554708.png?v=1")
    
		serverQueue.songs.push(song);
		if (playlist) return undefined;
		else return msg.channel.send(embed)
	}  
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  
  const music = new Discord.RichEmbed()
  .setAuthor(`Reproduciendo: ${song.title}`,"https://cdn.discordapp.com/emojis/596579667264143362.gif?v=1")
  .setColor("GREEN")
  
	serverQueue.textChannel.send(music)
}







//╭━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╭╮╱╱╭╮
//┃╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱┃┃╱╭╯╰╮
//┃╰╯╰┳━━┳━━┳━━╮╭━╯┣━━╮╭━╯┣━┻╮╭╋━━┳━━╮
//┃╭━╮┃╭╮┃━━┫┃━┫┃╭╮┃┃━┫┃╭╮┃╭╮┃┃┃╭╮┃━━┫
//┃╰━╯┃╭╮┣━━┃┃━┫┃╰╯┃┃━┫┃╰╯┃╭╮┃╰┫╰╯┣━━┃
//╰━━━┻╯╰┻━━┻━━╯╰━━┻━━╯╰━━┻╯╰┻━┻━━┻━━╯ 

          
client.on('message', async (message) => {
  
  const db = require('megadb');
  let prefix_db = new db.crearDB("prefixes")
   // let prefix = process.env.PREFIX;

  let prefix;
    if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)  
    }else{
      prefix = "s!"
    }

  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(message.content === '<@473699210848370710>') {
    message.channel.send(`Mi prefijo actual es ${prefix}`)
  }
  
  
  
  

 
  
  
  
  
}); //FIN
client.login(process.env.TOKEN);