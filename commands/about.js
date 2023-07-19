
module.exports = {
	name: 'about',
	description: 'Shows information about this bot',
	guildOnly: false,
	cooldown: 2,
	aliases: [],
	usage: '',
	execute(message, args) {
        const Discord = require(`discord.js`)
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#00aadd')
	.setTitle('Eler (version 2.65)')
	.setURL('https://elerbot.github.io/')
	.setAuthor('About the bot')
	.setDescription('Made by IAmSum#0001\nThanks to:')
	.addFields(
		{ name: 'IAmChris#0070', value: 'Some ideas', inline: true },
		{ name: 'Internet', value: 'Making something in Eler possible', inline: true },
		{ name: 'Microsoft', value: 'Powershell', inline: true },
		{ name: 'Microsoft (again)', value: 'Visual Studio Code', inline: true },
		{ name: 'You', value: 'Using this bot!', inline: true },
		
	)
	.setTimestamp()
	.setFooter('Made with discord.js and ❤');

     message.channel.send(exampleEmbed);
	},
};