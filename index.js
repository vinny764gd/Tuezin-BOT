const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
const config = require('./config.json');
const fs = require('fs');
let xp = require("./xp.json");
let coins = require("./coins.json");
const {configg, diversao, minecraft, moderacao, tankionline, utilitarios, nsfw} = require('./legendas')

bot.commands = new Discord.Collection();
console.log('Comandos:')
console.log('')

fs.readdir("./src/", (err, files) => { 
    if(err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js"); 
    arquivojs.forEach((f, i) => {  
        let props = require(`./src/${f}`); 
        console.log(`${f} foi iniciado com sucesso.`);
        
    });
});
 fs.readdir("./src/moderacao/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/moderacao/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/diversao/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/diversao/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/utilitarios/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/utilitarios/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/ajuda/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/ajuda/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/configuracao/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/configuracao/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/status/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/status/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/minecraft/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/minecraft/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(props.help.aliases, props);
      
      });
  });
  fs.readdir("./src/tankionline/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/tankionline/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });
  fs.readdir("./src/ticket/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./src/ticket/${file}`);
      let commandName = file.split(".")[0];
      console.log(`• ${commandName} ✅`);
      bot.commands.set(commandName, props);
    });
  });

bot.on('ready', () => {
    
    console.log(`Usuários: ${bot.users.size} | Canais: ${bot.channels.size} | Servidores: ${bot.guilds.size}`)
     let status = [
         {name: `${config.prefix}help`, type: 'PLAYING', url: 'https://www.twitch.tv/vinnnyyx'},
         {name: `www.tuezin.ml`, type: 'LISTENING', url: 'https://www.twitch.tv/vinnnyyx'}
     ]
         function setStatus() {
             let altStatus = status[Math.floor(Math.random()*status.length)]
             bot.user.setPresence({game: altStatus})
         }
         setStatus();
         setInterval(() => setStatus(), 4000)
 });

 bot.on('guildMemberAdd', members => {

     let embed = new Discord.RichEmbed()
    
      .setTitle(members.guild.name)
      .setDescription(`Seja muito bem-vindo ao **${members.guild.name}**, peço que você leia todas as condultas do servidor, para evitar punições.`)
      .addField(`Total de membros no servidor: `, `**[${members.guild.memberCount}]**`)
      .addField(`Você gosta das minhas funções?`, `Me adicione [clicando aqui!](https://discord.com/api/oauth2/authorize?client_id=902627366453510214&permissions=8&scope=bot)`, true)
      .setTimestamp()
      .setFooter(bot.user.username,bot.user.avatarURL)
      .setColor('#6800e5')

    members.send(embed)
 })

 bot.on('guildMemberRemove', members => {

  let embed = new Discord.RichEmbed()
    
  .setTitle(members.guild.name)
  .setDescription(`Que pena que você saiu, foi bom conhecer você! :)`)
  .addField(`Você gosta das minhas funções?`, `Me adicione [clicando aqui!](https://discord.com/api/oauth2/authorize?client_id=902627366453510214&permissions=8&scope=bot)`, true)
  .setTimestamp()
  .setFooter(bot.user.username,bot.user.avatarURL)
  .setColor('#6800e5')

   members.send(embed)

 })
bot.on('message', message => { 

    if(message.author.bot) return; 
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }

    let prefix = prefixes[message.guild.id].prefixes; 

    let xpAdd = Math.floor(Math.random() * 7) + 8;
    let coinsAdd = Math.floor(Math.random() * 18) + 30;

    let messagemXP = '> ' +message.author.username + ': '
    let messagemFinal = ' de experiência ganhos.'
    
    console.log(messagemXP  + xpAdd  + messagemFinal)
  
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1,
        coins: 0
      };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 2500;
    let coins =  xp[message.author.id].coins;

    xp[message.author.id].xp =  curxp + xpAdd;

    xp[message.author.id].coins = coins + coinsAdd;
    
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;

      let lvlup = new Discord.RichEmbed()

      .setDescription(`Parabéns <@${message.author.id}> você upou de nível, seu novo nível: **${curlvl + 1}**`)
      .setColor('#6800e5')
  
      message.channel.send(lvlup)
      .then(msg => {msg.delete(30000)});
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    });

    let mencionar = new Discord.RichEmbed()

    .setDescription(`Olá ${message.author}, meu prefixo neste servidor é: **${prefix}**\n\n▫️ Caso tenha dúvida sobre meus comandos, use **${prefix}help**\n▫️ Caso queira mudar meu prefixo, use **${prefix}setprefix**\n▫ Você também pode me adicionar [clicando aqui](https://discord.com/api/oauth2/authorize?client_id=902627366453510214&permissions=8&scope=bot)`)
    .setColor("6800e5")

    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)){
      return message.channel.send(mencionar).then(async msg => {
   
        await msg.react("❓")

        let menu1 = new Discord.RichEmbed()  

        .setTitle('Informação.')
        .setDescription(`Quando for usar algum comando e você não sabe, você pode seguir o padrão abaixo:\n\n**Tutorial** - Serve para mostrar como ultilizar o comando.\n**Alternativas** - Mostrar todas alternativas dos comandos, ex: \`banir, ban e punir.\`\n\n \`<@Usuário>\` - Referência ao usuário da menção. (@felipeapenas#0416)\n\`<Motivo>\` - A razão e pelo motivo da acusação.\n\`[Texto]\` - Informe os argumentos necessário para o uso do comando, no caso são as mensagens. (Ex: ${prefix}say <argumento> / Mensagem que deseja.)`)
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor('#6800e5')
        .setTimestamp()

        const a1 = (reaction, user) => reaction.emoji.name ==='❓' && user.id === message.author.id
        const b1 = msg.createReactionCollector(a1, { time: 300000 });
       
         b1.on("collect", c1 => {
         msg.delete(mencionar)
         msg.channel.send(menu1)
          .then(async msg => {
    
          msg.react('⬅️')
    
          const a2 = (reaction, user) => reaction.emoji.name ==='⬅️' && user.id === message.author.id
          const b2 = msg.createReactionCollector(a2, { time: 500000 });
    
          b2.on("collect", c2 => { 
          msg.delete(menu1)
          msg.channel.send(mencionar)
          
          })
        }) 
      })  
     }) 
    }

    let reacao = Math.floor((Math.random() * 150) + 0);

    if (reacao == 10) {
        message.react(`🤔`)
      } else if (reacao == 10){
        message.react(`👀`)
      } else if (reacao == 20){
        message.react(`❤️`)
      } else if (reacao == 30){
        message.react(`👀`)
      } else if (reacao == 40){
        message.react(`🤔`)
      } else if (reacao == 50){
        message.react(`❤️`)
      } else if (reacao == 60){
        message.react(`❤️`)
      } else if (reacao == 70){
        message.react(`👀`)
      } else if (reacao == 80){
        message.react(`🤔`)
      } else if (reacao == 90){
        message.react(`❤️`)
      } 

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
   
    if(!message.content.startsWith(prefix)) return;

    let arquivocmd = bot.commands.get(command.toLowerCase().slice(prefix.length));
    
    if(arquivocmd) return arquivocmd.run(bot, message, args);
	

  if(message.content.startsWith(prefix + 'info diversão')) {
    let embed1 = new Discord.RichEmbed() 
  
  embed1.setTitle(`Categoria: Diversão.`)
  embed1.setColor(`#6800e5`)
  embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
  embed1.addField(`Descrição:`, `\`${diversao}\``)
  embed1.setTimestamp()

  message.channel.send(embed1);

  };

  if(message.content.startsWith(prefix + 'info moderação')) {
    let embed1 = new Discord.RichEmbed() 
  
  embed1.setTitle(`Categoria: Moderação.`)
  embed1.setColor(`#6800e5`)
  embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
  embed1.addField(`Descrição:`, `\`${moderacao}\``)
  embed1.setTimestamp()

  message.channel.send(embed1);

  };

  if(message.content.startsWith(prefix + 'info config')) {
    let embed1 = new Discord.RichEmbed() 
  
  embed1.setTitle(`Categoria: Configuração.`)
  embed1.setColor(`#6800e5`)
  embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
  embed1.addField(`Descrição:`, `\`${configg}\``)
  embed1.setTimestamp()

  message.channel.send(embed1);

  };

  if(message.content.startsWith(prefix + 'info tankionline')) {
    let embed1 = new Discord.RichEmbed() 
  
  embed1.setTitle(`Categoria: Tankionline.`)
  embed1.setColor(`#6800e5`)
  embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
  embed1.addField(`Descrição:`, `\`${tankionline}\``)
  embed1.setTimestamp()

  message.channel.send(embed1);

  };

  if(message.content.startsWith(prefix + 'info minecraft')) {
    let embed1 = new Discord.RichEmbed() 
  
  embed1.setTitle(`Categoria: Minecraft.`)
  embed1.setColor(`#6800e5`)
  embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
  embed1.addField(`Descrição:`, `\`${minecraft}\``)
  embed1.setTimestamp()

  message.channel.send(embed1);

  };

  if(message.content.startsWith(prefix + 'info utilitarios')) {
    let embed1 = new Discord.RichEmbed() 
  
  embed1.setTitle(`Categoria: Utilitários.`)
  embed1.setColor(`#6800e5`)
  embed1.setFooter(`${bot.user.username}`, `${bot.user.avatarURL}`)
  embed1.addField(`Descrição:`, `\`${utilitarios}\``)
  embed1.setTimestamp()

  message.channel.send(embed1);

  };
});

bot.login(config.token)