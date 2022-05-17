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

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[yetkiyok]})


const menu = new Discord.MessageEmbed()
.setAuthor(`Hatalı Kullanım.`)
.setColor(`RANDOM`)
.setDescription(`
${ayarlar.prefix}sayaç log : sayaş logunu ayaralarsınız.
${ayarlar.prefix}sayaç hedef : sayaş hedefini belirlersiniz.
`)
if(!args[0]) return message.reply({embeds:[menu]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});

if(args[0] === "log"){
    let kanal = message.mentions.channels.first();

if(!kanal) return message.reply(`Lütfen Log Kanalını belirtiniz.`).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
db.set(`sayaç_log_${message.guild.id}`, kanal.id)
message.reply(`Başarılı bir şekilde sayaç log ${kanal} olarak belirlendi.`)
}

if(args[0] === "hedef"){
let hedef = args[1]

if(!hedef) return message.reply(`Hedef üye sayısını belirtiniz.`).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
if(isNaN(hedef)) return message.reply(`Hedef sayı ile olmalıdır.`).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});

db.set(`sayaç_hedef_${message.guild.id}`,hedef)
message.reply(`Sayaç hedefi **${hedef}** olarak ayarlandı.`)
}

if(args[0] === "sıfırla"){

let kontrol1 = db.fetch(`sayaç_log_${message.guild.id}`)
let kontrol2 = db.fetch(`sayaç_hedef_${message.guild.id}`)

if(!kontrol1 && !kontrol2) return message.reply(`Zaten ayarlanmamış.`).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
if(kontrol1) db.delete(`sayaç_log_${message.guild.id}`)
if(kontrol2) db.delete(`sayaç_hedef_${message.guild.id}`)
message.reply(`Sayaç ayarlamaları sıfırlanmıştır.`)
}



},

name: "sayaç",
description: "Sayaç sistemini ayarlarsınız.",
aliases: [""],
kategori: "moderasyon",
usage: "",
}