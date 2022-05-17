const Discord = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {

        const yetkiyok = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply({embeds:[yetkiyok]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});

let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

const kisibelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Rolün verileceği kişi belirtilmemiş!
Doğru Kullanım:` + " **+rolver** `<kişi> <rol>`")
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

if(!user) return message.reply({embeds:[kisibelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
const rolbelirt = new Discord.MessageEmbed()
.setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Kişiye verilecek rol belirtilmemiş!
Doğru Kullanım:` + " **+rolver** `<kişi> <rol>`")
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
if(!rol) return message.reply({embeds:[rolbelirt]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});


message.guild.members.cache.get(user.id).roles.add(rol)

const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor("ROL VERİLDİ !")
.setDescription(`${user}, isimli kişiye ${rol} isimli rol verildi.`)
.setFooter(`Komutu kullanan yetkili : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))


message.reply({embeds:[embed]})





},

name: "rolver",
description: "Belirtilen rolü belirtilen kişiye verirsiniz.",
aliases: [],
kategori: "moderasyon",
usage: "",
}