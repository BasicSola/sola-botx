const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Turning On Bot")
    bot.user.setActivity("Sola's moans", {type: 2});
});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('0x1BF235')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member} please check #read-me and #rules.`)
        .addField(':family_mwgb: | You are the member', `${member.guild.memberCount}`)
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('0xFF0D00')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name:', `${member}`)
        .addField(':microphone2: | Has left the server', 'We will miss you!')
        .addField(':family_mwgb: | The server now has', `${member.guild.memberCount}` + " members")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

const token = process.env.TOKEN;
bot.login(process.env.TOKEN)
