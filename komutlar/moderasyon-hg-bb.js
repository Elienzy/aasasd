const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


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


        let bos = args[0]
  
        const dogrukullanma = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Lütfen Komudu Doğru Kullanınız. **Doğru Kullanım: ${ayarlar.prefix}hg-bb kanal #kanal **`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
if(!bos) return message.reply({embeds:[dogrukullanma]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})


if(args[0] == "kanal") {

    let kanal = message.mentions.channels.first();
    if(!kanal) return message.reply(`Lütfen Bir Kanal Etiketleyiniz ** Doğru Kullanım ${ayarlar.prefix}hg-bb kanal #kanal **`).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})


    db.set(`hg_bb_kanal_${message.guild.id}`, kanal.id)

    message.reply(`Başarılı Bir Şekilde Hoşgeldin BayBay kanalı ${kanal} olarak ayarlandı.`)

}

if(args[0] == "sıfırla") {

    db.delete(`hg_bb_kanal_${message.guild.id}`)
    message.reply(`Başarılı bir şekilde sıfırlandı.`)
}



},

name: "hg-bb",
description: "",
aliases: [],
kategori: "",
usage: "",
}