const Discord = require("discord.js");


module.exports = {
    calistir: async(client, message, args) => {

  {
 
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
  } 
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı ', '`unban`komutu özel mesajlarda kullanılamaz.')
  return message.author.send({embeds:[ozelmesajuyari]}); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (!user) {
    const bid = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setAuthor("HATA !")
    .setDescription('**Banı kaldırılacak kişinin ID numarasını yazmalısın!**\n Doğru Kullanım:`+unban idnumarası sebep`')
   .setTimestamp() 
   .setFooter('Elienzy BOT', client.user.avatarURL())
   return message.channel.send({embeds:[bid]}).catch(console.error).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});;
  } 
  if (reason.length < 1) {
    const reas = new Discord.MessageEmbed()
    .setColor('YELLOW')
    .setAuthor("HATA !")
    .setDescription('**Ban kaldırma sebebini yazmalısın!**\n Doğru Kullanım:`+unban idnumarası sebep`')
    .setTimestamp() 
    .setFooter('Elienzy BOT', client.user.avatarURL())
   return message.channel.send({embeds:[reas]}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {});
  } 
 
  
  message.guild.members.unban(user);
  const embed = new Discord.MessageEmbed()
    .setColor('#ff0009')
    .setTimestamp()
    .setDescription('**Bir Kullanıcının Yasağı Kaldırıldı** :white_check_mark:')
    .addField('Yasağı Kaldırılan Kullanıcı:', `<@!${user}>`,true)
    .addField('Yasağı Kaldıran Yetkili:', `<@!${message.author.id}>`,true)
    .addField('Yasağı Kaldırma Sebebi:', reason,false)
  .setFooter(`Elienzy BOT Unban Sistemi`);
    
   message.channel.send({embeds:[embed]})


},

name: "unban",
description: "Belirlenen kişinin yasağını kaldırırsın.",
aliases: [],
kategori: "moderasyon",
usage: "",
}