const { REST, Routes } =  require('discord.js');
const {discordToken, appid} = require("./token");
const discordToken = require('./token');
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];


const rest = new REST({ version: '10' }).setToken(discordToken);


( async () => {
  
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(appid), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }})()