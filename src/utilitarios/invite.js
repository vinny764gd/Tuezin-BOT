const Discord = require('discord.js')
const fs = require('fs');
const config = require('../../config.json');
const anuncio = require('../../anuncio.json')

exports.run = async(bot, message, args) => {

  message.delete(20)

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

        if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: config.prefix
          };
        }

        let convites = Math.floor((Math.random() * 20) + 0);

              if (convites == 14) {
               message.reply(`${anuncio.anuncio}`)
             } else if (convites == 9){
               message.reply(`${anuncio.anuncio}`)
             } else if (convites == 4){
               message.reply(`${anuncio.anuncio}`)
             } 

const invite = new Discord.RichEmbed();
let prefix = prefixes[message.guild.id].prefixes; 

invite.setThumbnail(message.guild.iconURL)
invite.setAuthor(message.member.displayName, message.member.user.avatarURL);
invite.setTitle("Obrigado por me escolher!")
invite.setDescription(`\nPara adicionar eu em seu servidor, basta digitar o comando \n\`${prefix}invite\` e acessar o link que irá redirecionar até meu link de convite. Caso tenha dúvidas dos meus comandos, basta digitar \n\`${prefix}help\` em uns do servidores que eu estou. 😉\n\n**Invite**: [Clique aqui](https://discord.com/api/oauth2/authorize?client_id=902627366453510214&permissions=8&scope=bot)`)  
invite.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL);
invite.setColor("RANDOM");
invite.setTimestamp();

message.channel.send(invite)

}
module.exports.help = {
    name:"invite",
  }