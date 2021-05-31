// Main File.
const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client;
const disbut = require('discord-buttons')(client);
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
if (message.content.startsWith('!invite')) {
let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel('Website')
    .setURL('https://sharknix.github.io/ubot'); //if you use the "url" style, you must provide url using ".setURL()" method
    let button2 = new disbut.MessageButton()
    .setStyle('url')
    .setLabel('Invite')
    .setURL('https://dsc.gg/ubot-link'); //if you use the "url" style, you must provide url using ".setURL()" method
    const inviteEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Invite')
	.setAuthor('FireyAPI#7685')
	.setDescription('Invite our bot to your server(s)')
	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send({buttons: [ button, button2
  ],
  embed: inviteEmbed
});
}
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
if (message.content.startsWith('!bio')) {
  const activeaffiliate = ["fireyjs"]
for (var i = 0; i < activeaffiliate.length; i++) {
  if (message.content.includes(activeaffiliate[i])) {
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (args.splice(1) == 'fireyjs') {
    let btnfirey = new disbut.MessageButton() // upvote button
            btnfirey.setLabel('Website');
            btnfirey.setStyle('url')
            btnfirey.setID('websitefirey');
            btnfirey.setURL('https://sharknix.github.io');
        let btn2firey = new disbut.MessageButton() // downvote button
            btn2firey.setLabel('Friend Me')
            btn2firey.setStyle('blurple') 
            btn2firey.setID('friendfirey')

    message.channel.send('**About Me**\nI am a front end developer born in Ontario, Canada with a passion of coding. I have made 3 bots, TweetBot, U-Bot, and M-Bot.', {
  buttons: [
    btnfirey, btn2firey
  ]
})
    }
    } else {
    message.lineReplyNoMention('<:uncheck:848326675687407616> You sent an invalid bio name.')
  }
}
}
});

client.on('message', message => {
if (message.content.startsWith('!')) {
if (message.content == '!help moderation' || message.content == '!help polls' || message.content == '!help utility' || message.content == '!help' || message.content.startsWith('!avatar') || message.content == '!play' || message.content.startsWith('!dm') || message.content.startsWith('!kick') || message.content.startsWith('!poll') || message.content.startsWith('!custompoll') || message.content == '!help server' || message.content.startsWith('!status') || message.content == '!serverinfo' || message.content == '!invite' || message.content.startsWith('!say') || message.content.startsWith('!c') || message.content.startsWith('!clear') || message.content.startsWith('!whois') || message.content == '!ping' || message.content.startsWith('!botnick') || message.content.startsWith('!aff') || message.content.startsWith('!newpoll')) {
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
    if (message.content == '!help moderation' || message.content == '!help polls' || message.content == '!help utility' || message.content == '!help') {
      if (message.content == '!help moderation' || message.content == '!help polls' || message.content == '!help utility') { return }
   const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor(message.author.username, message.author.avatarURL())
	.setDescription('Catagories:' + '\n' + '```' + 'Moderation' + '```' + '```' + 'Utility' + '```' + '```' + 'Polls' + '```' + '\n' + 'To see commands in a specific catagory, do: ' + '``' + '!help ' + '[category]' + '``')
	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');

message.react("<:checkhelp:848017844041809991>").then(  message.lineReplyNoMention(helpEmbed))
    } else {
      return
    }
}
});

client.on('message', message => {
	if (message.content === '!help moderation' || message.content === '!help Moderation') {
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor(message.author.username, message.author.avatarURL(), 'https://github.com/sharknix')
	.setDescription('**Moderation** \n \n' + '``' + '!kick - Kicks a user mentioned.' + '``' + '\n' + '``' + '!ban - Bans a person mentioned.' + '``')
	.setThumbnail('https://cole.needs.rest/korm0zu8i9a.svg')

	.setTimestamp()
	.setFooter('Made using discord.js', 'https://i.imgur.com/wSTFkRM.png');
  message.channel.send(exampleEmbed)
	}
});

client.on('message', message => {
	if (message.content === '!help polls' || message.content === '!help Polls') {
		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('U-Bot - Help')
	.setAuthor(message.author.username, message.author.avatarURL())
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


   client.on('message', async (message) => {
    if (message.content.startsWith('!poll')) {
      const args = message.content.slice(prefix.length).trim().split(' ');
  
        message.channel.send(args.splice(1).join(" ")).then(message => {
    message.react(`<:upvote:843572083493568512>`)
    message.react(`<:downvote:843572083266813992>`)
   });
    }
   });

   client.on('message', async (message) => {
    if (message.content.startsWith('!newpoll')) {
      const args = message.content.slice(prefix.length).trim().split(' ');
        let btn = new disbut.MessageButton()
            btn.setLabel('⬆️');
            btn.setStyle('blurple')
            btn.setID('upvote');
        let btn2 = new disbut.MessageButton()
            btn2.setLabel('⬇️')
            btn2.setStyle('blurple') 
            btn2.setID('downvote')

        let btn3 = new disbut.MessageButton()
            btn3.setLabel('📝')
            btn3.setStyle('blurple') 
            btn3.setID('report')
        message.channel.send(`${args.splice(1).join(" ")}`, {
  buttons: [
    btn, btn2, btn3
  ]
});
    }
});


client.on('clickButton', async (button) => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
    if (button.id == 'upvote') {
      await button.think(true);
      let clicker = button.clicker
      setTimeout(() => {
            button.reply.edit(`Thanks for upvoting!`);
        }, 1000);

    }

    if (button.id == 'downvote') {
      await button.think(true);
      let clicker = button.clicker
      setTimeout(() => {
            button.reply.edit(`Hey! If you find someones poll offensive, press the report button.`);
        }, 1000);

    }

    if (button.id == 'friendfirey') {
      await button.think(true);
      setTimeout(() => {
            button.reply.edit(`***FireyJS ツ User Info***\nUsername: FireyJS ツ#7685\nAverage Response Time: 1-2 mins`);
        }, 1000);

    }

    if (button.id == 'report') {
      await button.think(true);
      setTimeout(() => {

            button.reply.edit(`Coming soon...`);
        }, 1000);

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