module.exports = {
	name: 'add',
	description: 'Adds 1 number to another.',
	guildOnly: false,
	cooldown: 1,
    aliases: ['plus'],
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
    var num1 = Number.parseFloat(args[0])
    var num2 = Number.parseFloat(args[1])
    var plus = num1 + num2
    const plusEmbed = new Discord.MessageEmbed()
        .setTitle(`${num1} + ${num2} = ...`)
        .setDescription(plus)
        .setColor(`#abcdef`)
    message.channel.send(plusEmbed)
	},
};
