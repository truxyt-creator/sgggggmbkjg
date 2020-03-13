//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require("http");
const express = require("express");
const app = express();
const nslookup = require("nslookup");
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT
const { Client, Data, RichEmbed, Discord } = require("discord.js");
const client = new Client();
const Canvas = require("canvas");
const Weez = require("weez");

let weez = new Weez.WeezAPI("RoK8dVir739GubQFPGCbYhomG2Ii06Pyvlcx");
client.on("ready", () => {
  console.log("El bot a sido iniciado");
  client.user.setPresence({
    status: "dnd",
    game: {
      name: "zNocturn | l!help",
      type: "PLAYING"
    }
  });
  
  setInterval(function() {
      
       let a = ["zNocturn | l!help",`${client,guilds.size}`]
       let b = a [Math.floor(Math.random()*a.length)];
       client.user.setActivity(b,{type:"PLAYING"}).catch(console.error());
  }, 1000)
  // Bot sending a Message to a text channel called test
  const testChannel = client.channels.find(x => x.name === "test");
  console.log(testChannel);
  // client.channels.find(c => c.name === 'test').send('Hello Server!')
});

// Mensaje de bienvenida

client.on("guildMemberAdd", async member => {
    var canal = client.channels.get("687120436299038782");
  let bienvenida = new Weez.Bienvenida()
  .avatar(member.user.displayAvatarURL)
  .fondo("https://media.discordapp.net/attachments/597081131438833665/687246094538899495/1200px-YouTube_full-color_icon_2017.svg.png")
  .textoTitulo("Bienvenido")
  .textoDesc(`${member.user.username}`)
  .textoColor('ffffff')
  .acceso(weez)
  let img = await Weez.bienvenidaRender(bienvenida)
  canal.send({ files: [img]})
  member.addRole("687139479579918361")
  console.log(
    `Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`
  );
});

client.on("guildMemberRemove", async member => {
    var canal = client.channels.get("687120436299038782");
  let bienvenida = new Weez.Bienvenida()
  .avatar(member.user.displayAvatarURL)
  .fondo("https://media.discordapp.net/attachments/597081131438833665/687246094538899495/1200px-YouTube_full-color_icon_2017.svg.png")
  .textoTitulo("Adiós")
  .textoDesc(`${member.user.username}`)
  .textoColor('ffffff')
  .acceso(weez)
  let img = await Weez.bienvenidaRender(bienvenida)
  canal.send({ files: [img]})
  console.log(
    `Adios usuario:  ${member.user.username} se ha salido a ${member.guild.name}.`
  );
});

//Moderacion
client.on('message', message => {
  let blacklisted = [ 'gay', 'verga', 'VERGA', 'Verga', 'GAY', 'pto', 'PUTO', '-protect', '-spam', 'PTO', 'HELE',  "Pito"]
  let foundInText = false;
  for (var i in blacklisted) {
    if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }
  if (foundInText) {
    message.delete();
    message.reply("⚠ **Esta prohibido enviar esos mensajes**")
  }
});
          
          
// Bot listenning messages
client.on("message", async msg => {
  console.log(msg.content);
  
  if (msg.content === "Hola") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  if (msg.content === "hola") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "ola") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "Ola") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "HolA") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "buenas") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "saludos") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "que tal") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "buenos dias") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "buenas tardes") {
    msg.reply("¡Hola! espero que te sientas muy bien.. 010101");
  }
  
  if (msg.content === "buenas noches") {
    msg.reply("¡Buenas Noches! Que sueñes con los angelitos 010101");
  }
  if (msg.content === "Buenas noches") {
    msg.reply("¡Buenas Noches! Que sueñes con los angelitos 010101");
  }
  if (msg.content === "adios") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "ADIOS") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "Adios") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "chau") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "CHAU") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "Chau") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "bye") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "BYE") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "Bye") {
    msg.reply("¡Adios! nos vemos pronto 010101");
  }
  if (msg.content === "que gusto de verlo") {
    msg.reply("¡Hola! a usted tambien.. 010101");
  }

  if (msg.content == "z!redes") {
    const embed = new RichEmbed()
      .addField(
        "Menú de redes sociales",
        "• Discord: https://discord.gg/3bebsbJ\n• YouTube: https://www.youtube.com/channel/UC3_P8PJCfY6FtjsFUFITWXw",
        true
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/597081131438833665/687239997702799394/54_9_351_806-8803_20200308_011826.jpg?width=590&height=590",
        true
        
      )
      .setFooter("Bot creado por zNocturn")
      .setColor("00D4FF");

    msg.channel.send(embed);
  }

  if (msg.content == "z!help") {
    const embed = new RichEmbed()
      .addField(
        "Menú de ayuda",
        "\n• z!redes\n• l!reglas\n•z!help\n\n•PD: Saluda",
        true
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/597081131438833665/687239997702799394/54_9_351_806-8803_20200308_011826.jpg?width=590&height=590",
        true
      )
      .setFooter("Bot creado por zNocturn")
      .setColor("00D4FF");

    msg.channel.send(embed);
  }
  
  
  if (msg.content == "z!reglas") {
    const embed = new RichEmbed()
      .addField(
        "Menú de reglas",
        "• No insultar a nadie\n• No amenazar a nadie\n• Usar el bot adecuadamente\n• No hacer spam\n• Respetar al staff\n• No salir ni entrar de los canales de voz\n• Respetar a TODOS\n•No ser toxico\n•No hacer flood\n•No pedir información personal\n•No pedir numero de telefono",
        true
      )
      .setThumbnail(
        "https://media.discordapp.net/attachments/597081131438833665/687239997702799394/54_9_351_806-8803_20200308_011826.jpg?width=590&height=590",
        true
      )
      .setFooter("Bot creado por zNocturn")
      .setColor("00D4FF");

    msg.channel.send(embed);
  }
  

  

//banear y kickear
if (!msg.guild) return;

  // If the message content starts with "!kick"
  if (msg.content.startsWith('l!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = msg.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = msg.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Razon opcional para este usuario').then(() => {
          // We let the message author know we were able to kick the person
          msg.reply(`A kickeado a ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          msg.reply('No se pudo kickear a este usuario');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        msg.reply('Este usuario no esta en el servidor');
      }
    // Otherwise, if no user was mentioned
    } else {
      msg.reply('Tienes que mencionar a un usuario');
    }
  }
  if (!msg.guild) return;

  // if the message content starts with "!ban"
  if (msg.content.startsWith('l!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = msg.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = msg.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          // We let the message author know we were able to ban the person
          msg.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          msg.reply('No pude banear al miembro');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        msg.reply('Este usuario no esta en el servidor');
      }
    } else {
    // Otherwise, if no user was mentioned
      msg.reply('Necesitas mencionar a un usuario para banear');
    }
  }

  // Deleting 100 messages
  if (msg.content.startsWith("l!clear")) {
    async function clear() {
      try {
        // await msg.delete();
        const fetched = await msg.channel.fetchMessages({ limit: 99 });
        msg.channel.bulkDelete(fetched);
        console.log("Messages deleted");
      } catch (e) {
        console.log(e);
      }
    }
    clear();
  }
  
  
});

const token = "Njg3MjMzNjA5NTg0ODY5NDE1.Xmi0Xw.trOnkw8lLcnVO8uuhs_a1fCrbPM";
client.login(token);client.login(token);