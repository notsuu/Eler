module.exports = {
	name: 'user',
	description: 'User information.',
	guildOnly: false,
	cooldown: 5,
	aliases: ['me'],
	usage: '',
	execute(message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};