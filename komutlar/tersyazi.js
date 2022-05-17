const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


  if (args.length < 1) {

    const kisibelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Yazıyı belirt.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
    return message.reply({embeds:[kisibelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
  }
   
message.channel.send(args.join(' ').split('').reverse().join(''))


},

name: "tersyazi",
description: "Yazını tersine çevirebilirsin.",
aliases: [],
kategori: "bot",
usage: "",
}