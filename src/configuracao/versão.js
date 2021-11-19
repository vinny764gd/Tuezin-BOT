const Discord = require('discord.js')
const fs = require('fs')
const config = require('../../config.json')

exports.run = async(bot, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
          prefixes: config.prefix
        };
      }
  
    let prefix = prefixes[message.guild.id].prefixes
    let version = new Discord.RichEmbed()

    .setTitle('Versão atual 1.1.3/ Log\'s.')
    .setDescription(`\`[21/08/2021]\` Adicionado o comando **${prefix}8ball**, ainda pode conter erros...\n\`[06/09/2021]\` Sistema de level foi resetado devido a um erro.\n\`[06/09/2021]\` Corrigido Bug's do terminal.\n\`[13/09/2021]\` Adicionado **11** comandos para NSFW.\n\`[21/09/2021]\` Corrigido alguns emojis não funcionavam.\n\`[21/09/2021]\` Adicionado novos comandos:\n**${prefix}mcserver** e **${prefix}mcicon** usem **${prefix}help <comando>** para mais informações.\n\n\`[23/09/2021]\` Corrigido alguns Bug's no terminal.\n\`[03/10/2021]\` Corrigido o erro do **${prefix}Skin**\n\n\`[26/10/2021]\` Conteúdos **nfsw** removido.`)
    .setColor('GREEN')
    .setFooter(bot.user.username)
    .setThumbnail(bot.user.avatarURL)

     message.channel.send(version)

}

exports.help = {
    nome: 'Versão',
    descricao: 'Ver novas atualizações do BOT, sempre que aver atualizações em nosso BOT, iremos notificar nessa área.'
}