module.exports = {
	name: 'ping',
	description: 'yeah..',
	guildOnly: false,
	cooldown: 2,
	aliases: [],
	usage: '',
	execute(message, args) {
    
        message.channel.send(`Pong! Message latency: ${Date.now() - message.createdTimestamp} ms`)
    }
}