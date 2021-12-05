const {Client, Intents, Interaction} = require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n')

const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.once('ready', () => {
    console.log('El bot esta listo')
})

client.on('interactionCreate', async Interaction => {
    if (!Interaction.isCommand()) return

    const { commandName } = Interaction
    
    if (commandName == 'ping') {
        await Interaction.reply('> 🏓 | Pong!')
    }
})

//client.login(process.env.token)
client.login(config.token)