module.exports = {
	name: 'random',
	description: 'Gets a random number between the first and the second one.',
	guildOnly: false,
	cooldown: 1,
    aliases: ['rng','rand'],
    usage: '[minimum] [maximum]',
	execute(message, args) {
        const Discord = require(`discord.js`)
        if (isNaN(args[0])) {
            const oneEmbed = new Discord.MessageEmbed()
                .setColor('#ffaaaa')
                .setTitle("Error")
                .setDescription(`Argument 1 missing/not a number.`)
                message.channel.send(oneEmbed);
        }
        else if (isNaN(args[1])) {
            const twoEmbed = new Discord.MessageEmbed()
                .setColor('#ffaaaa')
                .setTitle("Error")
                .setDescription(`Argument 2 missing/not a number.`)
                message.channel.send(twoEmbed);
        }
        else
        var min = Number.parseInt(args[0])
        var max = Number.parseInt(args[1])
        var rand = Number.parseInt(Math.random() * (max - min) + min)
        const rngEmbed = new Discord.MessageEmbed()
            .setTitle(`You rolled...`)
            .setDescription(rand)
            .setColor(`#abcdef`)
        message.channel.send(rngEmbed)
	},
};
