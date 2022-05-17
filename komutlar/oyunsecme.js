const Discord = require("discord.js");
const { MessageActionRow, MessageButton } = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {
        const yetkiyok3 = new Discord.MessageEmbed()
        .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[yetkiyok3]})

      const row =new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setEmoji("<:amoungus:790205107659735071>")
                    .setLabel("Among Us")
                    .setStyle("SECONDARY")
                    .setCustomId("amongus"),
                    new MessageButton()
                    .setEmoji("<:pubgm:762311480720359444>")
                    .setLabel("Pubg Mobile")
                    .setStyle("SECONDARY")
                    .setCustomId("pubgmobile"),
                    new MessageButton()
                    .setEmoji("<:metin2:762311500739641364>")
                    .setLabel("Metin 2")
                    .setStyle("SECONDARY")
                    .setCustomId("metin2"),
                    new MessageButton()
                    .setEmoji("<:csgo:965736569975754812> ")
                    .setLabel("CS:GO")
                    .setStyle("SECONDARY")
                    .setCustomId("csgo"),
                    new MessageButton()
                    .setEmoji("<:gtav:965736569757630484>")
                    .setLabel("GTA V")
                    .setStyle("SECONDARY")
                    .setCustomId("gtav"),
                    


          )


          const row2 =new MessageActionRow()
          .addComponents(
              new MessageButton()
                  .setEmoji("<:lol:965736569795403786>")
                  .setLabel("League Of Legends")
                  .setStyle("SECONDARY")
                  .setCustomId("lol"),
                  new MessageButton()
                  .setEmoji("<:valo:764571489730953266>")
                  .setLabel("Valorant")
                  .setStyle("SECONDARY")
                  .setCustomId("valorant"),
                  


          )



                    


            

            const oyunsec = new Discord.MessageEmbed()
            .setAuthor("OYUN ROLÜ AL !")
      .setColor("RED")
      .setDescription(`Aşağıdaki seçeneklere tıklayarak istediğiniz oyun rollerini alabilirsiniz.`)
      .setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
            await message.channel.send({embeds:[oyunsec] , components: [row, row2]})



},

name: "oyunsec",
description: "Oyun secme",
aliases: [],
kategori: "",
usage: "",
}