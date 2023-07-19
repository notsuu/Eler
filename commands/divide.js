module.exports = {
	name: 'divide',
	description: 'Divides 1 number by another.',
	guildOnly: false,
	cooldown: 1,
    aliases: ['div'],
    usage: '[number 1] [number 2]',
	execute(message, args) {
        const Discord = require(`discord.js`)
        if (isNaN(args[0])) {
            const oneEmbed = new Discord.MessageEmbed()
                .setColor('#ffaaaa')
                .setTitle("Error")
                .setDescription(`Argument 1 missing/not a number.`)
                message.channel.send(oneEmbed);
                return;
        }
        else if (isNaN(args[1])) {
            const twoEmbed = new Discord.MessageEmbed()
                .setColor('#ffaaaa')
                .setTitle("Error")
                .setDescription(`Argument 2 missing/not a number.`)
                message.channel.send(twoEmbed);
                return;
        }
        else
        if (Number.parseInt(args[1]) === 0) {
            const ae = new Discord.MessageEmbed()
                .setColor('#ffaaaa')
                .setTitle("Error")
                .setDescription(`Cannot divide by zero.`)
                message.channel.send(ae);
                return;
        }
        var num1 = Number.parseFloat(args[0])
        var num2 = Number.parseFloat(args[1])
        var slash = num1 / num2
        const divEmbed = new Discord.MessageEmbed()
            .setTitle(`${num1} / ${num2} = ...`)
            .setDescription(slash)
            .setColor(`#abcdef`)
        message.channel.send(divEmbed)
	},
};
