const Discord = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");



module.exports = {
    calistir: async(client, message, args) => {
      const yetkiyok3 = new Discord.MessageEmbed()
      .setAuthor("HATA !")
.setColor("ORANGE")
.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))

      if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({embeds:[yetkiyok3]})

      const row = new MessageActionRow()
      .setComponents(
            new MessageSelectMenu()
                    .setCustomId("burc")
                    .setPlaceholder("✔ Burç seçmek için tıkla !")
                    .setOptions([
                        {label: "♈ Koç burcu rolünü almak için tıkla.", value:"koc", description:" "},
                        {label: "♉ Boğa burcu rolünü almak için tıkla.", value:"boga", description:" "},
                        {label: "♊ İkizler burcu rolünü almak için tıkla.", value:"ikizler", description:" "},
                        {label: "♋ Yengeç burcu rolünü almak için tıkla.", value:"yengec", description:" "},
                        {label: "♌ Aslan burcu rolünü almak için tıkla.", value:"aslan", description:" "},
                        {label: "♍ Başak burcu rolünü almak için tıkla.", value:"basak", description:" "},
                        {label: "♎ Terazi burcu rolünü almak için tıkla.", value:"terazi", description:" "},
                        {label: "♏ Akrep burcu rolünü almak için tıkla.", value:"akrep", description:" "},
                        {label: "♐ Yay burcu rolünü almak için tıkla.", value:"yay", description:" "},
                        {label: "♑ Oğlak burcu rolünü almak için tıkla.", value:"oglak", description:" "},
                        {label: "♒ Kova burcu rolünü almak için tıkla.", value:"kova", description:" "},
                        {label: "♓ Balık burcu rolünü almak için tıkla.", value:"balık", description:" "},
                    ])


      )


      const yetkiyok = new Discord.MessageEmbed()
      .setAuthor("BURÇ SEÇ !")
.setColor("GREEN")
.setDescription(`Aşağıdaki seçeneklere tıklayarak kendinize uygun burç rollerini alabilirsiniz.`)
.setFooter(`Komutu kullanan kişi : ` + message.member.displayName, message.author.avatarURL({dynamic: true}))
      await message.channel.send({embeds:[yetkiyok] , components: [row]})

      
       

},

name: "burc",
description: "",
aliases: [],
kategori: "",
usage: "",
}