module.exports = {
	name: 'support',
	description: 'Sends you an invite to the support server.',
	guildOnly: false,
	cooldown: 2,
	aliases: ['ineedhelp'],
	usage: '',
	execute(message, args) {
		message.channel.send('Join here: https://discord.gg/eBDaP2KJS6');
	},
};