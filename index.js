const { Client, Intents, Collection, MessageAttachment, MessageButton, MessageActionRow, MessageEmbed, Permissions, Constants, ApplicationCommandPermissionsManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
const ayarlar = require("./ayarlar.json");
const config = require("./config");
const Discord = require("discord.js")
const db = require("nrc.db");
const message = require("./events/message");
const { DiscordFivemApi } = require('discord-fivem-api');
let prefix = ayarlar.prefix;

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
  require(`./komutcalistirici`)(client);
}); 

client.on("ready", () => {
  require("./events/eventLoader")(client);
});

///// `saas_${message.guild.id}`

client.on("messageCreate", async msg => {

  let saas = db.fetch(`saas_${msg.guild.id}`)

if(saas == true) {

var sa = ["sa","SA","Sa","Sea","sea","Selamın Aleyküm","selamın aleyküm", "SELAMIN ALEKYÜM","Selam","selam","SELAM"]

if(sa.includes(msg.content.toLowerCase())){
msg.reply(`Aleyküm Selam Hoşgeldin Dostum.`)



}



}


})

client.on("guildMemberAdd", async member => {

/*

    db.delete(`otorol_kanal_${message.guild.id}`)
    db.delete(`otorol_rol_${message.guild.id}`)
*/


let kanal = db.fetch(`otorol_kanal_${member.guild.id}`)
let rol   = db.fetch(`otorol_rol_${member.guild.id}`)

if(!kanal) return;
if(!rol) return;

member.roles.add(rol)

client.channels.cache.get(kanal).send(`${member} sunucuya katıldı ve başarılı bir şekilde <@&${rol}> isimli rol verildi.`)

})
client.on("guildMemberAdd", async member => {


let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)

if(!hgbb) return;

const hg = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`${member}, Aramıza Hoşgeldin`)
client.channels.cache.get(hgbb).send({embeds: [hg]})
})

client.on("guildMemberRemove", async member => {


  let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)
  
  if(!hgbb) return;
  
  const bb = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`${member}, Aramızdan Ayrıldı`)
  client.channels.cache.get(hgbb).send({embeds: [bb]})
  })


  client.on("guildMemberAdd", async member => {


    let kontrol1 = db.fetch(`sayaç_log_${member.guild.id}`)
    let kontrol2 = db.fetch(`sayaç_hedef_${member.guild.id}`)

   if(!kontrol1) return;

   if(kontrol2){
   
   let kalan = kontrol2 - member.guild.memberCount

   if(kalan === 0) {
     client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize ulaştık.`)
     db.delete(`sayaç_hedef_${member.guild.id}`)
   }else{

    client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize **${kalan}** kişi kaldı.`)

   }

   }else{

    client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize şu anda bulunmamaktadır..`)
   }

  })

client.on("messageCreate", async msg => {

  const i =  db.fetch(`küfürengel_${msg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(kufur => msg.content.toLowerCase() === kufur)) {
      try {
        if (

          !msg.member.permissions.has("ADMINISTRATOR")) {
          msg.delete();
          return msg.channel.send("Heyyy dostum! Bu kanalda küfür etmek yasak.").then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 2000)
    }).catch(e => {});

        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  const i = db.fetch(`küfürengel_${oldMsg.guild.id}`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(kufur => newMsg.content.toLowerCase() === kufur)) {
      try {
        if (

          !newMsg.member.permissions.has("ADMINISTRATOR")) {
          newMsg.delete();
          return oldMsg
            .reply("Mesajı düzenlediğini yakaladım! Küfür yasak.").then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 2000)
    }).catch(e => {});
     
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});



client.on("messageCreate", message => {
        var kurallar = new Discord.MessageEmbed()
        .setAuthor("📜"+ message.guild.name + " " + "Sunucu Kuralları")
          .setThumbnail(message.guild.iconURL({dynamic: true}))
.setColor("YELLOW")
.setDescription(`● ÖNCELİKLE HER KURAL YAZILI OLMAK ZORUNDA DEĞİLDİR.

● Yazı kanallarını kasıtlı olarak kirletmek ve amacı dışı kullanmak yasaktır.(MUTE-SEBEBİ)

● Yetkililerden rol istemek, dilenmek ve devam ettirmek yasaktır.(MUTE SEBEBİ)

● KÜFÜR, KÜFÜR KISALTMALARI, KİŞİYE VE  KİŞİSEL DEĞERLERE HAKARET YASAKTIR.(MUTE-BAN SEBEBİ)

● Kişilerin özel bilgilerini paylaşmak yasaktır.(BAN SEBEBİ)

● Cinsiyetçi, ırkçı, dini, siyasi ve hassas görüşler/konular hakkında kaba söylemler, her türlü nefret söylemi yasaktır.(BAN SEBEBİ)

● SÖZLÜ  TARTIŞMAK VEYA SUNUCUNUN HUZURUNU BOZMAK YASAKTIR.(BAN SEBEBİ)

- Odaları trollemek, insanları rahatsız etmek, sesli sohbette kulak tırmalayıcı (bass vb.) sesler açmak yasaktır.(MUTE SEBEBİ)

● Sunucu üyelerine reklam yasaktır.(BAN SEBEBİ)

● Yüksek yetkili kişileri etiketlemek, diğer yetkilileri de rahatsız edici şekilde etiketlemek yasaktır.(MUTE SEBEBİ)

● KADIN ÜYELERİMİZE SARKINTILIK VB. YAPMAK YASAKTIR.(BAN SEBEBİ)

● Spam ve flood yapmak yasaktır.(MUTE-BAN SEBEBİ)

● ROLLER HAKKINDA İYİ VEYAHUT KÖTÜ SÖZ SÖYLEYENLER SUNUCUDAN ATILACAK VEYA BANLANACAKTIR.

● CHATE BİR MESAJ DAHİ ATANLAR KURALLARI OKUMUŞ KABUL ETMİŞ SAYILACAKTIR.`)
.setFooter(`🎉 Sunucumuza hoşgeldiniz. `)
  
  const butonlar = new MessageActionRow()
.addComponents(

    new MessageButton()
    .setCustomId('acceptRule')
    .setLabel("Kabul et")
    .setEmoji('✅')
    .setStyle('SUCCESS'),
        

);
/*
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({content:"Yetkin Yok!"}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
  /*
  if(message.content.toLowerCase() == "𝓇") {
     return message.channel.send({embeds:[kurallar] , components: [butonlar] });
    */
  
    
});

client.on("interactionCreate", async(interaction) => {
 
    if(interaction.message.id == "951921846339637278"){

       if(interaction.customId== "acceptRule"){

         //if(!interaction.guild.members.cache.get(interaction.user.id).roles.cache.get("951882907297919037"))
         interaction.guild.members.cache.get(interaction.user.id).roles.add("951905447777042482");
         //if(!interaction.guild.members.cache.get(interaction.user.id).Nickname.cache.get(`⚡️${interaction.member.displayName}`))
         interaction.guild.members.cache.get(interaction.user.id).setNickname(`⚡️${interaction.member.displayName}`);
         
         var basarili = new Discord.MessageEmbed()
         .setAuthor("BAŞARILI")
         .setColor("GREEN")
         .setDescription("Rolün başarılı bir şekilde verildi.Sunucumuza **HOŞ GELDİNİZ**. \n <#951840256246841400> Kanalından oyun rolleri alabilirsin.")
         await interaction.reply({embeds:[basarili],ephemeral:true})
         
       } 
    }
  
})

client.on("messageCreate", message => {
        var kurallar3 = new Discord.MessageEmbed()
        .setAuthor("📜"+ message.guild.name + " " + "Sunucu Kuralları")
          .setThumbnail(message.guild.iconURL({dynamic: true}))
.setColor("YELLOW")
.setDescription(`● ÖNCELİKLE HER KURAL YAZILI OLMAK ZORUNDA DEĞİLDİR.

● Yazı kanallarını kasıtlı olarak kirletmek ve amacı dışı kullanmak yasaktır.(MUTE-SEBEBİ)

● Yetkililerden rol istemek, dilenmek ve devam ettirmek yasaktır.(MUTE SEBEBİ)

● KÜFÜR, KÜFÜR KISALTMALARI, KİŞİYE VE  KİŞİSEL DEĞERLERE HAKARET YASAKTIR.(MUTE-BAN SEBEBİ)

● Kişilerin özel bilgilerini paylaşmak yasaktır.(BAN SEBEBİ)

● Cinsiyetçi, ırkçı, dini, siyasi ve hassas görüşler/konular hakkında kaba söylemler, her türlü nefret söylemi yasaktır.(BAN SEBEBİ)

● SÖZLÜ  TARTIŞMAK VEYA SUNUCUNUN HUZURUNU BOZMAK YASAKTIR.(BAN SEBEBİ)

- Odaları trollemek, insanları rahatsız etmek, sesli sohbette kulak tırmalayıcı (bass vb.) sesler açmak yasaktır.(MUTE SEBEBİ)

● Sunucu üyelerine reklam yasaktır.(BAN SEBEBİ)

● Yüksek yetkili kişileri etiketlemek, diğer yetkilileri de rahatsız edici şekilde etiketlemek yasaktır.(MUTE SEBEBİ)

● KADIN ÜYELERİMİZE SARKINTILIK VB. YAPMAK YASAKTIR.(BAN SEBEBİ)

● Spam ve flood yapmak yasaktır.(MUTE-BAN SEBEBİ)

● ROLLER HAKKINDA İYİ VEYAHUT KÖTÜ SÖZ SÖYLEYENLER SUNUCUDAN ATILACAK VEYA BANLANACAKTIR.

● CHATE BİR MESAJ DAHİ ATANLAR KURALLARI OKUMUŞ KABUL ETMİŞ SAYILACAKTIR.`)
.setFooter(`🎉 Sunucumuza hoşgeldiniz. `)
/*

            
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({content:"Yetkin Yok!"}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
 
  if(message.content.toLowerCase() == "𝓛") {
     return message.channel.send({embeds:[kurallar3]});
    
   };

  */
})



//////////////  Modlog Başlangıc
client.on("channelCreate", async channel => {
  let kanal = db.fetch(`modlog_${channel.guild.id}`)
  if(!kanal) return;
  let user = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kanal Oluşturuldu")
  .setDescription(`
  
  Kanal İd : **${channel.id}**
  Kanal İsmi : **${channel.name}**
  Oluşturan Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})

client.on("channelDelete", async channel => {
  let kanal = db.fetch(`modlog_${channel.guild.id}`)
  if(!kanal) return;
  let user = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kanal Silindi")
  .setDescription(`
  
  Kanal İd : **${channel.id}**
  Kanal İsmi : **${channel.name}**
  Silen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})

client.on("channelUpdate", async (oldChannel, newChannel) => {
  let kanal = db.fetch(`modlog_${oldChannel.guild.id}`)
  if(!kanal) return;
  let user = await oldChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Kanal Güncellendi")
  .setDescription(`
  
  Kanal İd : **${oldChannel.id}**
  Eski Kanal İsmi : **${oldChannel.name}**
  Yeni Kanal İsmi : **${newChannel.name}**
  Güncelleyen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

client.on("emojiDelete", async emoji => {
  let kanal = db.fetch(`modlog_${emoji.guild.id}`)
  if(!kanal) return;
  let user = await emoji.guild.fetchAuditLogs({ type: 'EMOJİ_DELETE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Emoji Silindi")
  .setDescription(`
  
  Emoji İd : **${emoji.id}**
  Emoji İsmi : **${emoji.name}**
  Silen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

client.on("emojiCreate", async emoji => {
  let kanal = db.fetch(`modlog_${emoji.guild.id}`)
  if(!kanal) return;
  let user = await emoji.guild.fetchAuditLogs({ type: 'EMOJİ_CREATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Emoji Oluşturuldu")
  .setDescription(`
  
  Emoji İd : **${emoji.id}**
  Emoji İsmi : **${emoji.name}**
  Oluşturan Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
  let kanal = db.fetch(`modlog_${oldEmoji.guild.id}`)
  if(!kanal) return;
  let user = await oldEmoji.guild.fetchAuditLogs({ type: 'EMOJİ_UPDATE' }).then(audit => audit.entries.first())

  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Emoji Güncellendi")
  .setDescription(`
  
  Emoji İd : **${oldEmoji.id}**
  Eski Emoji İsmi : **${oldEmoji.name}**
  Yeni Emoji İsmi : **${newEmoji.name}**
  Güncelleyen Kişi: ${user.executor} **(${user.executor.id})**
  `)
  client.channels.cache.get(kanal).send({embeds:[embed]})

})  

////////////// Modlog Bitiş

//burcbaslangic
client.on("interactionCreate",async (interaction, message) => {

  if(interaction.isSelectMenu()) {

  if(interaction.values[0] == 'koc') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.koc)) {
      await member.roles.remove(config.buttons.koc);
      await interaction.reply({ content: `<@&${config.buttons.koc}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.koc);
      await interaction.reply({ content: `<@&${config.buttons.koc}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }


  if(interaction.values[0] == 'boga') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.boga)) {
      await member.roles.remove(config.buttons.boga);
      await interaction.reply({ content: `<@&${config.buttons.boga}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.boga);
      await interaction.reply({ content: `<@&${config.buttons.boga}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'ikizler') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.ikizler)) {
      await member.roles.remove(config.buttons.ikizler);
      await interaction.reply({ content: `<@&${config.buttons.ikizler}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.ikizler);
      await interaction.reply({ content: `<@&${config.buttons.ikizler}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'yengec') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.yengec)) {
      await member.roles.remove(config.buttons.yengec);
      await interaction.reply({ content: `<@&${config.buttons.yengec}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.yengec);
      await interaction.reply({ content: `<@&${config.buttons.yengec}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'aslan') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.aslan)) {
      await member.roles.remove(config.buttons.aslan);
      await interaction.reply({ content: `<@&${config.buttons.aslan}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.aslan);
      await interaction.reply({ content: `<@&${config.buttons.aslan}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'basak') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.basak)) {
      await member.roles.remove(config.buttons.basak);
      await interaction.reply({ content: `<@&${config.buttons.basak}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.basak);
      await interaction.reply({ content: `<@&${config.buttons.basak}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'terazi') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.terazi)) {
      await member.roles.remove(config.buttons.terazi);
      await interaction.reply({ content: `<@&${config.buttons.terazi}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.terazi);
      await interaction.reply({ content: `<@&${config.buttons.terazi}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }


  if(interaction.values[0] == 'akrep') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.akrep)) {
      await member.roles.remove(config.buttons.akrep);
      await interaction.reply({ content: `<@&${config.buttons.akrep}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.akrep);
      await interaction.reply({ content: `<@&${config.buttons.akrep}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'yay') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.yay)) {
      await member.roles.remove(config.buttons.yay);
      await interaction.reply({ content: `<@&${config.buttons.yay}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.yay);
      await interaction.reply({ content: `<@&${config.buttons.yay}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'oglak') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.oglak)) {
      await member.roles.remove(config.buttons.oglak);
      await interaction.reply({ content: `<@&${config.buttons.oglak}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.oglak);
      await interaction.reply({ content: `<@&${config.buttons.oglak}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'kova') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.kova)) {
      await member.roles.remove(config.buttons.kova);
      await interaction.reply({ content: `<@&${config.buttons.kova}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.kova);
      await interaction.reply({ content: `<@&${config.buttons.kova}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.values[0] == 'balık') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.balık)) {
      await member.roles.remove(config.buttons.balık);
      await interaction.reply({ content: `<@&${config.buttons.balık}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.balık);
      await interaction.reply({ content: `<@&${config.buttons.balık}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }








}})


//burcbitis


///button oyun rol
client.on("interactionCreate",async (interaction, message) => {

  if(interaction.isButton()) {

    if(interaction.customId === "amongus") {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littamongus)) {
      await member.roles.remove(config.buttons.littamongus);
      await interaction.reply({ content: `<@&${config.buttons.littamongus}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littamongus);
      await interaction.reply({ content: `<@&${config.buttons.littamongus}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }
  if(interaction.customId === "pubgmobile") {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littpubgmobile)) {
      await member.roles.remove(config.buttons.littpubgmobile);
      await interaction.reply({ content: `<@&${config.buttons.littpubgmobile}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littpubgmobile);
      await interaction.reply({ content: `<@&${config.buttons.littpubgmobile}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.customId === 'metin2') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littmetin2)) {
      await member.roles.remove(config.buttons.littmetin2);
      await interaction.reply({ content: `<@&${config.buttons.littmetin2}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littmetin2);
      await interaction.reply({ content: `<@&${config.buttons.littmetin2}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.customId === 'csgo') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littcsgo)) {
      await member.roles.remove(config.buttons.littcsgo);
      await interaction.reply({ content: `<@&${config.buttons.littcsgo}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littcsgo);
      await interaction.reply({ content: `<@&${config.buttons.littcsgo}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.customId === 'gtav') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littgtav)) {
      await member.roles.remove(config.buttons.littgtav);
      await interaction.reply({ content: `<@&${config.buttons.littgtav}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littgtav);
      await interaction.reply({ content: `<@&${config.buttons.littgtav}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.customId === 'lol') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littlol)) {
      await member.roles.remove(config.buttons.littlol);
      await interaction.reply({ content: `<@&${config.buttons.littlol}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littlol);
      await interaction.reply({ content: `<@&${config.buttons.littlol}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

  if(interaction.customId === 'valorant') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.littvalorant)) {
      await member.roles.remove(config.buttons.littvalorant);
      await interaction.reply({ content: `<@&${config.buttons.littvalorant}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.littvalorant);
      await interaction.reply({ content: `<@&${config.buttons.littvalorant}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }



//sfa kurallar
  if(interaction.customId === 'sfakabulet') {
    let member = interaction.member
    if(member.roles.cache.has(config.buttons.sfakurallarrol)) {
      await member.roles.remove(config.buttons.sfakurallarrol);
      await interaction.reply({ content: `<@&${config.buttons.sfakurallarrol}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
    } else {
      await member.roles.add(config.buttons.sfakurallarrol);
      await interaction.reply({ content: `<@&${config.buttons.sfakurallarrol}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
    };
  
    
  
  }

}})





//button oyun rol bitiş
/*
client.login(process.env.token);


const thedarkside = require("express")();thedarkside.get
('/', (req, res) =>{res.send("");});thedarkside.listen(8080);


*/

//client.login("OTY5ODcwNTkxNzk0NDk1NDk4.YmzsYA.OpksnTbXGqgzUaneKSUFnCkXwJg");
client.login("OTY1NzEzMDYwMDU4NzcxNDY3.G5eqNp.rW7uTA_zdrT5d1x-_igGGPckezGm18M6nnvMzE");

/*
const thedarkside = require("express")();thedarkside.get
('/', (req, res) =>{res.send("");});thedarkside.listen(8080);

*/