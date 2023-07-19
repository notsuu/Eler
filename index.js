const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Guess im ready. For throwing out alot of errors. ${client.guilds.cache.size} servers btw`);
	client.user.setActivity("version 2.65 (el.help)");
}),
client.on('guildCreate', guild => {
  guild.systemChannel.send(`**Hello, i'm Eler! Thanks for adding me!**\nIf you want to check out the commands, read the documentation! (el.help)\nOr, if you want, upvote the bot!\n*Oh, and heres a cookie ^_^*\n🍪`)
});

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'welcomes');
if (!channel) return;
var heyEmbed = new Discord.MessageEmbed()
	.setColor('#aaffaa')
	.setTitle(`Hey!`)
	.setDescription(`Welcome to the server ${member}!`)
	.setFooter(`This server now has ${channel.guild.memberCount} members!`)
	channel.send(heyEmbed);
		
	});
client.on('guildMemberRemove', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'welcomes');
if (!channel) return;
var heyEmbed = new Discord.MessageEmbed()
	.setColor('#ffaaaa')
	.setTitle(`Bye.`)
	.setDescription(`${member.user.tag} has left. How sad.`)
	.setFooter(`This server now has ${channel.guild.memberCount} members.`)
	channel.send(heyEmbed);
		
	});
client.on('message', async message => {
  if(message.content.startsWith(`eler please give nitro`)) {
	message.channel.send('no');
	return;
  }
  if (!message.content.startsWith(prefix)) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
    
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('you rly thought i can run this in DMs?');
	}

	if (command.args && !args.length) {
		let reply = `You didnt provide arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nProper usage: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}



	try {
		var now = Date.now();
		var timestamps = cooldowns.get(command.name);
		var cooldownAmount = (command.cooldown || 3) * 1000;
	
		if (timestamps.has(message.author.id)) {
			var expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	
			if (now < expirationTime) {
				var timeLeft = (expirationTime - now) / 1000;
				var WAITEmbed = new Discord.MessageEmbed()
			.setColor('#ffffaa')
			.setDescription(`:warning:  You're on cooldown. Please wait ${timeLeft} seconds before using this command.`)
			message.channel.send(WAITEmbed);
			return;
			}
		}
	
		timestamps.set(message.author.id, now);
		setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		var errorEmbed = new Discord.MessageEmbed()
		.setColor('#ffaaaa')
		.setTitle('Something went wrong!')
		.setDescription(error)
		.setTimestamp()
		.setFooter('Report it to the developer, maybe he will fix it!');
		message.channel.send(errorEmbed);
	}
});


client.login(token);