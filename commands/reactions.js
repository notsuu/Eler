module.exports = {
	name: 'discordnowhasreactions',
	description: 'bro why',
	guildOnly: false,
	cooldown: 2,
	aliases: ['dnhr'],
	usage: '',
	execute(message, args) {
        const { Client, MessageAttachment } = require('discord.js');
        const attachment = new MessageAttachment('./discordnowhasreactions.mp4');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
}