module.exports = {
	name: 'youtube',
	description: 'bro why',
	guildOnly: false,
	cooldown: 2,
	aliases: ['yt'],
	usage: '',
	execute(message, args) {
        message.channel.send('Loading...')
.then((message)=> {
  setTimeout(function(){
    message.edit('Done! https://youtube.com');
  }, 3500)
}); 
    }
}