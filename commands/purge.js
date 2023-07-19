module.exports = {
	name: 'purge',
	description: 'Purges 2-99 messages.',
	guildOnly: true,
	cooldown: 5,
	aliases: ['bulk'],
	usage: '[number between 2 and 99]',
	execute(message, args) {
		const Discord = require(`discord.js`)
		const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) {
            return message.reply(':x: thats not a number');
        } else if (amount < 2 || amount > 100) {
            return message.reply(' keep it between 2 and 99!');
        }
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const permEmbed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setDescription(`:x:  Missing permission: Manage Messages`)
		message.channel.send(permEmbed);
			return;
		}
        message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('something went wrong :thinking:');
		});
	},
};