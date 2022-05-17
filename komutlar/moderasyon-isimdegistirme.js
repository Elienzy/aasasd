const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
        if(!message.member.permissions.has("MANAGE_NICKNAMES")) return message.reply({embeds:[yetkiyok]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
let member = message.mentions.members.first()
let isim = args[1]

const etiket = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Kişi belirtilmemiş!
Doğru Kullanım:` + " **+isimdegistir** `<kişi> <yeniisim>`")
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))


if(!member) return message.reply({embeds:[etiket]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})

const isimbelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`İsim belirtilmemiş!
Doğru Kullanım:` + " **+isimdegistir** `<kişi> <yeniisim>`")
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!isim) return message.reply({embeds:[isimbelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
let üye = message.guild.members.cache.get(member.id)
üye.setNickname(`${isim}`)

const embed = new Discord.MessageEmbed()
.setAuthor("BAŞARILI !")
.setColor("GREEN")
.setDescription(`${member} isimli üyenin ismi **${isim}** olarak değiştirildi`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

message.reply({embeds:[embed]})
},

name: "isimdegistir",
description: "Belirlenen kişinin ismini değiştirir.",
aliases: [],
kategori: "moderasyon",
usage: "",
}