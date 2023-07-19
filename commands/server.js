module.exports = {
	name: 'server',
	description: 'Server information.',
	guildOnly: true,
	cooldown: 5,
	aliases: ['sinfo'],
	usage: '',
	execute(message, args) {
		const Discord = require(`discord.js`)
		const guild = new Discord.Guild()
		let createdate = new Date(message.guild.createdAt)
		var srEmbed = new Discord.MessageEmbed()
		
	.setColor('#ffaaff')
	.setTitle(`${message.guild.name}`)
	.addFields(
		{ name: 'Members', value: `${message.guild.memberCount}`, inline: true },
		{ name: 'Owner', value: `<@${message.guild.ownerID}>`, inline: true },
		{ name: 'Creation date', value: createdate, inline: true },
		{ name: 'Boosts', value: `${message.guild.premiumSubscriptionCount} (tier ${message.guild.premiumTier})`, inline: true },
	)
	.setTimestamp()
	message.channel.send(srEmbed);
	},
};