

module.exports = {
	name: 'help',
	description: 'Get help.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const Discord = require(`discord.js`)
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#abcdef')
        .setTitle("Need help?")
        .setDescription(`Check the documentation for a list of commands: https://eler.gitbook.io`)
        message.channel.send(helpEmbed);
    },
}