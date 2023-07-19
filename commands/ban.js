module.exports = {
	name: 'ban',
    description: 'Bans someone.',
    guildOnly: true,
	cooldown: 5,
  aliases: ['yourenotwelcomehere','superpwn'],
  usage: '[mention]',
	execute(message, args) {
        const user = message.mentions.users.first();
        const Discord = require(`discord.js`)
        // If we have a user mentioned
        if (user) {
          // Now we get the member from the user
          if (!message.member.hasPermission("BAN_MEMBERS")) {
            const permEmbed = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setDescription(`:x:  Missing permission: Ban Members`)
		message.channel.send(permEmbed);
			return;
            return;
            }
          const member = message.guild.members.resolve(user);
          if (member.hasPermission("MANAGE_GUILD", true)) {
            const mkEmbed = new Discord.MessageEmbed()
            .setColor('#ffaaaa')
            .setDescription(`:x:  Unable to ban mods/admins `)
            message.channel.send(mkEmbed);
              return;
            }
          // If the member is in the guild
          if (member) {
            /**
             * Ban the member
             * Make sure you run this on a member, not a user!
             * There are big differences between a user and a member
             * Read more about what ban options there are over at
             * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
             */
            member
              .ban({
                reason: args,
              })
              .then(() => {
                // We let the message author know we were able to ban the person
                const successEmbed = new Discord.MessageEmbed()
            .setColor('#aaffaa')
            .setDescription(`:white_check_mark:  Banned ${user.tag}`)
            message.channel.send(successEmbed);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to ban the member,
                // either due to missing permissions or role hierarchy
                message.reply('something went wrong :thinking:');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            console.log("h")
          }
        } else {
          // Otherwise, if no user was mentioned
          message.channel.send("Please mention a correct user to ban.");
        }
      }
	};
