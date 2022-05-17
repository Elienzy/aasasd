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
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[yetkiyok]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});



let test = db.fetch(`küfürengel_${message.guild.id}`);

if (test)  {

    db.delete(`küfürengel_${message.guild.id}`);
          const kapatildi = new Discord.MessageEmbed()
        .setAuthor("KAPATILDI !")
.setColor("RED")
.setDescription(`Küfür Engel Sistemi **Kapatıldı**`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
    message.channel.send({embeds:[kapatildi]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})

    return
}

if (!test)  {

    db.set(`küfürengel_${message.guild.id}`, true);
            const açıldı = new Discord.MessageEmbed()
        .setAuthor("AÇILDI !")
.setColor("GREEN")
.setDescription(`Küfür Engel Sistemi **Açıldı**`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
    message.channel.send({embeds:[açıldı]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})

    return
}



},

name: "küfür-engel",
description: "Küfür Engel Sistemini Açarsın/Kapatırsın.",
aliases: [],
kategori: "moderasyon",
usage: "",
}