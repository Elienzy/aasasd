const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {


  const yazi = args.slice(0).join('+'); 

      const kisibelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Lütfen yazı yazınız.
Doğru Kullanımı = **+alevlilogo (yazınız)**`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

  if(!yazi) return message.channel.send({embeds:[kisibelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setAuthor("BAŞARILI !")
  .setTitle("Logo başarılı bir şekilde oluşturuldu.")
  .setColor("RANDOM")
  .setTimestamp()   
  .setImage(linqo)
  .setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
  message.channel.send({embeds:[embed]})


},

name: "alevlilogo",
description: "Alevli logo yapabilirsin.",
aliases: [],
kategori: "bot",
usage: "",
}