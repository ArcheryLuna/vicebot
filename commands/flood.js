const Client = require("../structure/Client");
const { MessageEmbed, ClientApplication, MessageAttachment } = require('discord.js');
const { Message } = require('discord.js')
module.exports = {
    name: "flood",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        if (!message.author.id === "518754382075133953")
        {
            return
        }
        for (i = 1; i < 100000000000;) {
            message.channel.send("gay")
            setTimeout({ setTimeout: 10 })
            i++
        }
    }
}