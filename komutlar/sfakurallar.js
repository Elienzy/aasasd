const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {
        const yetkiyok3 = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[yetkiyok3]}).then(cs => {
            setTimeout(() => {
            cs.delete().catch(e => {})
            }, 5000)
          }).catch(e => {})

      const row =new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setEmoji("✅")
                    .setLabel("Kabul et.")
                    .setStyle("SUCCESS")
                    .setCustomId("sfakabulet"),
                    


          )






                    


            

          const oyunsec = new Discord.MessageEmbed()
          .setAuthor("📜"+ message.guild.name + " " + "Sunucu Kuralları")
            .setThumbnail(message.guild.iconURL({dynamic: true}))
  .setColor("YELLOW")
  .setDescription(`● **Uygunsuz mesajlar, küfür, küfür kısaltmaları, argo söylemler veya ırkçılık, cinsiyet ayrımı, tercihlere yönelik söylemler gibi şeyleri yapmamaya dikkat edin.**
  ● **Kimseyi rahatsız etme, kavga boyutuna ulaşacak tartışmalara girme ve rahatsız edici görseller, videolar paylaşma.**
  ● **Yetkili ekibi taklit etmek yasaktır.**
  ● **Yazı kanallarında art arda mesaj göndermek (flood) yapmayın / spamlerde bulunmayın.**
  ● **Discord'daki yazılı sohbet kanallarına veya sunucudaki üyelerin DM'lerine kişisel promosyon içeren yönlendirmeler yapmak yasaktır.**
  ● **Bir oyuncuyu, insanı, topluluğu veya bir sembolü hedef göstermek, kötülemek kesinlikle yasak.**
  ● **Dolandırıcılık ve toksik tavırlar kalıcı olarak uzaklaştırılabilir.**
  ● **Discord'da sadece Türkçe kullanmaya çalışalım.**
  ● **+18 içerikli paylaşımlar yapmak yasaktır.**
  ● **Kişisel kavgaları Discord sohbet kanallarına taşımak yasaktır.**
  ● **Yazışma kanalları amacı dışında kullanmak yasaktır.**`)
  .setFooter(`🎉 Sunucumuza hoşgeldiniz. `)
            await message.channel.send({embeds:[oyunsec] , components: [row]})



},

name: "sfakural",
description: "sfakural",
aliases: [],
kategori: "",
usage: "",
}