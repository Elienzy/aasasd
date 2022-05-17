const Discord = require("discord.js");
const db = require("nrc.db")


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
    }).catch(e => {});
        
let saas = db.fetch(`saas_${message.guild.id}`)


if(!saas) {
db.set(`saas_${message.guild.id}`, true)
const saasaktif = new Discord.MessageEmbed()
.setAuthor("BAŞARILI")
.setColor("GREEN")
.setDescription(`Sa-As sistemi başarılı bir şekilde açıldı.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
message.reply({embeds:[saasaktif]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
return;
}
db.delete(`saas_${message.guild.id}`)
const saaskapat = new Discord.MessageEmbed()
.setAuthor("BAŞARILI")
.setColor("RED")
.setDescription(`Sa-As sistemi başarılı bir şekilde kapatıldı.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

message.reply({embeds:[saaskapat]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});




},

name: "sa-as",
description: "Sa As sistemini açarsın/kapatırsın",
aliases: ["saas"],
kategori: "",
usage: "",
}