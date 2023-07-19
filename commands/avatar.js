module.exports = {
	name: 'avatar',
    description: 'Avatar(s) of mentioned user(s).',
    guildOnly: false,
	cooldown: 5,
    aliases: ['pfp','av'],
    usage: '[mentioned user(s), leave blank for your avatar]',
	execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
	},
};