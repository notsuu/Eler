module.exports = {
	name: 'say',
	description: 'Says something you want it to.',
	guildOnly: false,
	cooldown: 0,
    aliases: ['speak'],
    usage: '[your message]',
	execute(message, args) {
		const Discord = require(`discord.js`)
		if (message.member.hasPermission("MANAGE_GUILD")) {
			
			var whatmustisay = message.content.slice(6, message.content.length)
			if (whatmustisay.includes("eler sucks")) {
				return message.channel.send("what did you just say right now")
				
			}
			message.delete()
			message.channel.send(whatmustisay);
			
		} else {
			const permEmbed = new Discord.MessageEmbed()
			.setColor('#ff0000')
		
			.setDescription(`:x:  Missing permission: Manage Server`)
			message.channel.send(permEmbed);
				return;
		}
        
	},
};