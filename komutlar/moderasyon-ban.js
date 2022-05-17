const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');


module.exports = {
    calistir: async(client, message, args) => {

        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds:[yetkiyok]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})


/////  !ban @kişi sebep

        let user = message.mentions.users.first();
        let sebep = args[1]

        const atma = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Kişi belirtilmemiş!
Doğru Kullanım:` + " **+ban** `<banlanacak kişi> sebep`")
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))




        if(!user) return message.reply({embeds:[atma]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})


        const sebepbelirt = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Sebep belirtilmemiş!
Doğru Kullanım:` + " **+ban** `<banlanacak kişi> sebep`")
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!sebep) return message.reply({embeds:[sebepbelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})


const üye = message.guild.members.cache.get(user.id)

üye.ban({reason: sebep})


const BAN = new Discord.MessageEmbed()
.setAuthor("YASAKLANDI !")
.setColor("RED")
.setDescription(`${user}, isimli kişi başarılı bir şekilde Sunucudan Banlandı
Banlanma sebebi: **${sebep}**`


)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))



message.reply({embeds:[BAN]})


},

name: "ban",
description: "Belirlenen kişiyi sunucudan yasaklarsın.",
aliases: [],
kategori: "moderasyon",
usage: "",
}