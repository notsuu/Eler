module.exports = {
	name: 'uwu',
	description: 'UwU',
	guildOnly: false,
	cooldown: 2,
	aliases: [''],
	usage: '',
	execute(message, args) {
        const { Client, MessageAttachment } = require('discord.js');
        const attachment = new MessageAttachment('./UwU.mp4');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
}