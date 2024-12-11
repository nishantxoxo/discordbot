const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); 
const {discordToken, appid} = require("./token");
/* a  client who has access to guilds, like creating and deleting, and access to guildmessages,
 like creating deleting updating messages*/

client.on("messageCreate", (message) => {
    if(message.author.bot) return;

    if (message.content.startsWith("create")){
        const url = message.content.split("create ")[1];
        return message.reply({
            content: "generating shortid for " + url,
        }); 
    }
    console.log(message.content)
    message.reply({content: "hi from bot"})
})

client.on("interactionCreate", (interaction)=>{
    console.log(interaction)
    interaction.reply("PONGGG")
})


client.login(discordToken)

