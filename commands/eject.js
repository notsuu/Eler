module.exports = {
	name: 'eject',
    description: 'Ejects someone.',
    guildOnly: false,
	cooldown: 3,
    aliases: ['getout','ishetheimpostor'],
    usage: '[mentioned user(s), leave blank to eject yourself]',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`${message.author.username} was The Impostor. \n 0 impostors remain.`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username} was The Impostor. \n0 impostors remain.`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
	},
};