// Main File.
const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client;
const token = process.env.TOKEN;
const prefix = '!';
const botowner = '511699466399514627';
function keepAlive() {
  require('./server.js');
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! Status: ${client.user.presence.status}`);
  client.user.setStatus('dnd');
  setInterval(function(){
        client.user.setActivity(`!help | Guilds: ${client.guilds.cache.size} | vpnai.net`);
        }, 1000);
});

client.on('message', message => {
if (message.content.startsWith('!aff')) {
  const activeaffiliate = ["vpnai"]
for (var i = 0; i < activeaffiliate.length; i++) {
  if (message.content.includes(activeaffiliate[i])) {
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (args.splice(1) == 'vpnai') {
    message.lineReplyNoMention('vpnAI x U-Bot \nGet 40% off on any VPN plan when you use the promo code:\n``LASSETHEBEST`` at checkout.')
    }
    } else {
    message.lineReplyNoMention('<:uncheck:848326675687407616> You sent an invalid affiliate link.')
  }
}
}
});

client.on('message', message => {
if (message.content.startsWith('!')) {
if (message.content == '!help moderation' || message.content == '!help polls' || message.content == '!help utility' || message.content == '!help' || message.content == '!avatar' || message.content == '!hug' || message.content == '!play' || message.content == '!dm' || message.content == '!kick' || message.content == '!poll' || message.content == '!custompoll' || message.content == '!help server' || message.content == '!status' || message.content == '!serverinfo' || message.content == '!invite' || message.content == '!say' || message.content.startsWith('!c') || message.content.startsWith('!clear') || message.content == '!whois' || message.content == '!ping' || message.content == '!botnick' || message.content.startsWith('!aff')) {
  return
  } else {
    var commands = ["help moderation", "help polls", "help utility", "whois", "dm", "play", "kick", "clear", "c", "say", "ping", "botnick", "help"][Math.floor(Math.random() * 13)];
message.lineReplyNoMention('<:uncheck:848326675687407616> You sent an invalid command. How about you try ``!' + commands + '``?')
  }
  } else {
    return
  }
  });

client.on('message', message => {
  if (message.content.startsWith('!help')) {
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (args.splice(1).join(" ") == "server") {
   const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor('FireyAPI#7685')
	.setDescription('Catagories:' + '\n' + '```' + 'Moderation' + '```' + '```' + 'Utility' + '```' + '```' + 'Polls' + '```' + '\n' + 'To see commands in a specific catagory, do: ' + '``' + '!help ' + '[category]' + '``')
	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

message.react("<:checkhelp:848017844041809991>").then(  message.lineReplyNoMention(helpEmbed))
  } else {
 if (message.content == '!help moderation' || message.content == '!help polls' || message.content == '!help utility' || message.content == '!help') {
  return
  } else {
    var helpcommands = ["utility", "polls", "moderation"][Math.floor(Math.random() * 3)]

message.lineReplyNoMention('<:uncheck:848326675687407616> You sent an invalid help command. How about you try ``!help ' + helpcommands + '``?')
  }
    }
      }
});

client.on('message', message => {
	if (message.content === '!help moderation' || message.content === '!help Moderation') {
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor(message.author.username, message.author.avatarURL, 'https://github.com/sharknix')
	.setDescription('**Moderation** \n \n' + '``' + '!kick - Kicks a user mentioned.' + '``' + '\n' + '``' + '!ban - Bans a person mentioned.' + '``')
	.setThumbnail('https://cole.needs.rest/korm0zu8i9a.svg')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');
  message.author.send(exampleEmbed)
	}
});

client.on('message', message => {
	if (message.content === '!help polls' || message.content === '!help Polls') {
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor(message.author.username, message.author.avatarURL)
	.setDescription('**Polls** \n \n' + '``' + '!poll - Makes a poll with upvote and downvote buttons.' + '``' + '\n' + '``' + '!custompoll - Makes a poll with custom upvote and downvote buttons.' + '``')
	.setThumbnail('https://cole.needs.rest/korm0zu8i9a.svg')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

message.channel.send(exampleEmbed);
	}
});

client.on('message', message => {
	if (message.content === '!help utility' || message.content === '!help Utility') {
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor(message.author.username, message.author.avatarURL())
	.setDescription('**Utility** \n \n' + '``' + '!whois - shows info about the person mentioned in/sending the message\n!dm - Direct Message a user mentioned.\n!ping - Shows the ping.' + '``')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

message.channel.send(exampleEmbed);
	}
});

client.on('message', message => {
if (message.content.startsWith('!dm')) {
    const prefix = '!'
    const args = message.content.slice(prefix.length).trim().split(' ');
    const target = message.mentions.users.first()
if(!target) return message.channel.send("You didnt state the user to send the DM to!")

const msgs = args.splice(2).join(" ")
if(!msgs) return message.channel.send('You Didnt State the Message you want to send the user')

if(message.attachments.size > 0){
    var Attachment = message.attachments.array();
    var OurAttachment = Attachment[0];
    const attachment = new MessageAttachment(OurAttachment.url);

    target.send(msgs);
    target.send(attachment);
    const user = message.author;
    message.channel.send('<@' + user.id + '>,' + ' I Sent a DM to ' + target.username)

  } else {
     target.send(msgs);
     const user = message.author;
     message.channel.send('<@' +user.id + '>' + ' sent a dm to ' + target.username)
  }
}
});

client.on('message', (message) => {
  // if the message doesn't start with the prefix or the author is a bot, exit early
  const prefix = '!';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // create an args variable that slices off the prefix and splits it into an array
  const args = message.content.slice(prefix.length).split(/ +/);
  // create a command variable by taking the first element in the array
  // and removing it from args
  const command = args.shift().toLowerCase();

  if (command === 'status') {
    // if the message author has no permission, send a message and exit
    if (!message.author.id === botowner)
      return message.channel.send('Your not the Admin of the server or bot!');
     } else {
     const activity = args.join(' ');
    client.user.setStatus(activity);
     }
  });

client.on("message", (message) => {
    if (message.content.startsWith("!play")) {
       message.channel.send('Get our sister bot M-Bot!')
       message.channel.send('https://discord.com/api/oauth2/authorize?client_id=843901355923079188&permissions=104131840&scope=bot')
    }
});

client.on('message', (message) => {
if (message.content.startsWith('!serverinfo')) {
const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor(3447003)
  .addField('Location', message.guild.region, true)
  .addField('Created', message.guild.createdAt.toLocaleString(), true)
  .setTimestamp()
  .setFooter(client.user.username, client.user.avatarURL);

  message.channel.send({embed});
}
});

client.on('message', message => {
  if (message.content.startsWith('!poll')) {
    const prefix = '!'
    const args = message.content.slice(prefix.length).trim().split(' ');
   
   message.channel.send(args.splice(1).join(" ")).then(message => {
    message.react("<:upvote:843572083493568512>")
    message.react("<:downvote:843572083266813992>")
   })
}
});

client.on('message', message => {
  if (message.content.startsWith('!custompoll')) {
    const prefix = '!'
    const args = message.content.slice(prefix.length).trim().split(' ');
   
   message.channel.send(args.splice(3).join(" ")).then(message => {
    message.react(`${args[1]}`)
    message.react(`${args[2]}`)
   })
}
});

client.on('message', (message) => {
if (message.content.startsWith('!invite')) {
message.channel.send('Invite our bot to your server! \n https://discord.com/oauth2/authorize?client_id=842062905905250364&permissions=8&scope=bot')
}
});


client.on("message", (message) => {
  if (message.content.startsWith("!say")) {
const args = message.content.slice(prefix.length).trim().split(' ');

message.channel.send(args.splice(1).join(" "))
  }
  });

  client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/\s+/);
  const [command, input] = args;

  if (command === 'clear' || command === 'c') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "You cant use this command since you're missing `manage_messages` perm",
        );
    }

    if (isNaN(input)) {
      return message.channel
        .send('enter the amount of messages that you would like to clear')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    if (Number(input) < 0) {
      return message.channel
        .send('enter a positive number')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    // add an extra to delete the current message too
    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    message.channel.bulkDelete(amount, true)
    .then((_message) => {
      message.channel
        // do you want to include the current message here?
        // if not it should be ${_message.size - 1}
        .send(`Bot cleared \`${_message.size}\` messages :broom:`)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });
  }
  });

client.on('message', message => {
if (message.content === "!ping") {
message.channel.send(`⏱| Pong! Ping is **${client.ws.ping}ms**.`)
}
});

client.on('message', message => {
if (message.content.startsWith('!whois')) {
let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first();
} else {
    user = message.author;
}

const member = message.guild.member(user);

const whoisembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("In Server", message.guild.name, true)
    .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
    .addField("Bot:", `${user.bot}`, true) 
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send(whoisembed);
}
});

client.on('message', message => {
  if (message.content.startsWith('!botnick')) {
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (message.author.id == botowner) {
    client.user.setUsername(args.splice(1).join(" "));
    message.channel.send(`Changed Bot Nickname to ${client.username}`)
    message.catch(err)
    } else {
      message.channel.send(`${message.author.username}, you are not the owner of the bot!`)
    }
  }
});

client.on('message', (message) => {
if (message.content.startsWith('!avatar')) {
let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first();
} else {
    user = message.author;
}

message.channel.send(`${user.displayAvatarURL()}`)
}
});

client.login(token);
keepAlive();