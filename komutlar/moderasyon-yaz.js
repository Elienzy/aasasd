const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {
      

  {
 
        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply({embeds:[yetkiyok]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
  } 


      const etiket = new Discord.MessageEmbed()
      .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Lütfen bir kanal etiketleyiniz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
  


        let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
},

name: "yaz",
description: "Bota mesaj yazdırır.",
aliases: [],
kategori: "moderasyon",
usage: "",
}