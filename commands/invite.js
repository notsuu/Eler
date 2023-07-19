module.exports = {
	name: `invite`,
	description: 'Lets you invite the bot.',
	guildOnly: false,
	cooldown: 2,
	aliases: ['addbot'],
	usage: '',
	
	execute(message, args) {
		message.channel.send(`https://elerbot.github.io/add`)
	},
};