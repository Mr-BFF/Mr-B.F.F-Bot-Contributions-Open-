const discordjs = require('discord.js');
const client = new discordjs.Client();

client.login("TOKEN GOES HERE");

client.on('message', message => {

 if(message.content == "Invite Bot")
    {  
    	message.channel.send("Feel free to invite me to your server! https://discordapp.com/api/oauth2/authorize?client_id=639818879379570738&permissions=271648800&scope=bot");
    }

});
