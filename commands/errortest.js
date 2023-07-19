module.exports = {
	name: 'errortest',
	description: 'Throws an error. Debugging purposes only.',
	guildOnly: false,
	cooldown: 5,
	aliases: ['error'],
	usage: '',
	execute(message, args) {
		message.channel.send(errortest);
	},
};