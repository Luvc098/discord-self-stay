const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()

const { Client, CustomStatus, RichPresence, getUUID } = require('discord.js-selfbot-v13');

const client = new Client();

client.on("ready", async () => {
	console.log(`✅ ${client.user.username} Started Online`);
  client.user.setHypeSquad('HOUSE_BRILLIANCE');
  client.user.setPresence({ activities: [r],});
	const {joinVoiceChannel} = require('@discordjs/voice');
	const channel = client.channels.cache.get("Your Voice Channels ID"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: channel.id, // the voice channel's id
				guildId: channel.guild.id, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: false,
				selfMute: true,
			});
		  }, 6000)
		});   
    
const r = new RichPresence() 
	.setApplicationId('1088963504926642286')
	.setType('PLAYING')
	.setURL('https://www.youtube.com/channel/UCWa_euD13oekqNsQPXYKXYw')
	.setState('LiquidBounce')
	.setName('LiquidBounce')
	.setDetails('Halo')
	.setParty({
		max: 5,
		current: 3,
		id: getUUID(),
	})
	.setStartTimestamp(Date.now())
	.setAssetsLargeImage('https://cdn.discordapp.com/attachments/1005727430675279942/1215589899936473128/637704298950098232.png?ex=65fd4d50&is=65ead850&hm=cb3a0aba5a7e0d36dadc461ca1802818b3340b84e644cb82772b21d1d7126f3f&')
	.setAssetsLargeText('LiquidBounce')

client.login(process.env.TOKEN)
