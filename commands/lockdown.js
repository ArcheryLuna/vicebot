const Client = require("../structure/Client");
const { Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: "lockdown",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const msg = await message.channel.send('✔')
        await msg.edit(client.embed({
            title: "Pong!",
            description: `WebSocket ping is ${client.ws.ping}MS! \nMessage edit ping is ${msg.createdAt = message.createdAt}`,
            color: "00ff00"
        }, message))
    }
}