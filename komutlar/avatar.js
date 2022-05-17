const Discord = require("discord.js");
const db = require('quick.db')


module.exports = {
    calistir: async(client, message, args) => {

  let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

const kisibelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Avatarını görmek istediğin kişiyi belirt.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!user) return message.reply({embeds:[kisibelirt]})


      const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()       
.setAuthor(`Elienzy BOT`)
.setDescription(`${user} , isimli kişinin avatarı`)
.setImage(user.avatarURL({dynamic: true}))
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))


message.reply({embeds:[embed]})

},

name: "avatar",
description: "Etiketlenen kişinin avatarını gösterir.",
aliases: [],
kategori: "bot",
usage: "",
}