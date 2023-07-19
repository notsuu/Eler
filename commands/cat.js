module.exports = {
	name: 'cat',
	description: 'Gets a random image of a cat.',
	guildOnly: false,
	cooldown: 2,
	aliases: ['showacat'],
	usage: '',
	execute(message, args) {
		const request = require('request');

request.get('http://thecatapi.com/api/images/get?format=src&type=png', {

}, function(error, response, body) {
	if(!error && response.statusCode == 200) {
		message.channel.send(response.request.uri.href);
	} else {
		console.log(error);
	}
})
	},
};