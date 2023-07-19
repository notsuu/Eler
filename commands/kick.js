module.exports = {

	name: 'kick',
    description: 'Kicks someone.',
    guildOnly: true,
	cooldown: 5,
	aliases: ['getthisguyoutofhere','pwn'],
	usage: '[mention]',
	execute(message, args) {
		var user = message.mentions.users.first();
		var Discord = require(`discord.js`)
		// If we have a user mentioned
		if (user) {
		  // Now we get the member from the user
		  if (!message.member.hasPermission("KICK_MEMBERS")) {
			const permEmbed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setDescription(`:x:  Missing permission: Kick Members`)
		message.channel.send(permEmbed);
			return;
			return;
		  }
		  const member = message.guild.members.resolve(user);
		  if (member.hasPermission("MANAGE_GUILD", true)) {
			const mkEmbed = new Discord.MessageEmbed()
			.setColor('#ff0000')
			.setDescription(`:x:  Unable to kick mods/admins`)
			message.channel.send(mkEmbed);
			  return;
		  }
		 
		  
		  // If the member is in the guild
		  if (member) {
			/**
			 * Kick the member
			 * Make sure you run this on a member, not a user!
			 * There are big differences between a user and a member
			 */
			member
			  .kick(args)
			  .then(() => {
				// We let the message author know we were able to kick the person
				const successEmbed = new Discord.MessageEmbed()
            .setColor('#aaffaa')
            .setDescription(`:white_check_mark:  Kicked ${user.tag}`)
            message.channel.send(successEmbed);
			  })
			  .catch(err => {
				// An error happened
				// This is generally due to the bot not being able to kick the member,
				// either due to missing permissions or role hierarchy
				message.reply('something went wrong :thinking:');
				// Log the error
				console.error(err);
			  });
		  } else {
			// The mentioned user isn't in this guild
			console.log("h 2 electric boogaloo")
		  }
		  // Otherwise, if no user was mentioned
		} else {
		  message.reply("Please mention a correct user to kick.");
		}
	  }
}

