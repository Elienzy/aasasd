const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');



module.exports = {
    calistir: async(client, message, args) => {
        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[yetkiyok]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})

      
if(isNaN(args[0])) {
  const errembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField(`Yanlış Kullanım!`, `Bir rakam yazmalısın!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}mesajsil <temizlenecek mesaj sayısı>`)
  .setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
return message.channel.send({embeds:[errembed]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
}
  
if (args[0] < 1) return message.reply("**1** adetten az mesaj silemem!").then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
if (args[0] > 100) return message.reply("**100** adetten fazla mesaj silemem!").then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Hiç mesaj silemedim! _(**14** günden önceki mesajları silemem!)_");
})

        const silindi = new Discord.MessageEmbed()
        .setAuthor("BAŞARILI")
.setColor("GREEN")
.setDescription(`**${args[0]}** adet mesaj başarıyla silindi!`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
      
message.channel.send({embeds:[silindi]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
 

//.then(msg => msg.delete({timeout:"5000))




},

name: "mesajsil",
description: "Mesajları silebilirsin.",
aliases: [],
kategori: "moderasyon",
usage: "",
}