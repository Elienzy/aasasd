const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

let user = message.mentions.users.first();

const kisibelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Öpeceğin kişiyi belirt.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!user) return message.reply({embeds:[kisibelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});


      const embed = new Discord.MessageEmbed()
.setColor("CD00CD")
.setTimestamp()       
.setAuthor(`Elienzy BOT`)
.setDescription(`${user} , isimli kişiyi öptün`)
.setImage(`https://media.giphy.com/media/bEVuKfZTFn1XvBAQqJ/giphy.gif`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))


message.reply({embeds:[embed]})

},

name: "öp",
description: "Etiketlediğin kişiyi öpersin.",
aliases: [],
kategori: "bot",
usage: "",
}