const Client = require("../structure/Client");
const { Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const cmd = args[0]
        if (!cmd)
        {
            message.channel.send(new MessageEmbed()
                .setTitle("Help Commands")
                .setThumbnail(message.guild.bannerURL({ format: "png", dynamic: false }))
                .setDescription(`Vice-gram is not just a social media. its a whole new experience! with launch date being December 15th 2021 you will have a lot of stuff to look Forward to! making new friends , grinding for a red tick , posting some neat photos , you can do it all with vice-gram there will be over 200 up-to-date smart features included. see you there 😉 - <@697163247475884123> \n **__💻Server Stats__** \n **Ping :** \`${client.ws.ping}ms\` **Members :** \`${message.guild.memberCount} Members\` **prefix :** \`${client.prefix}\` \n **Commands**`)
                .addField("Fun Commands", "`ping`, `rank`, `lb`")
                .addField("Moderation Commands", "`Lockdown`, `Ban`, `Kick`, `Warn`, `Mute`")
                .addField("ViceGram Commands", "`reserve`")
                .setColor("GREEN")
            )
        }
        else if (cmd === "ping")
        {
            message.author.send("SHUSH")
            return
        }
        else if (cmd.toLowerCase() === "rank")
        {
            message.channel.send(new MessageEmbed()
                .setTitle("Rank 📈")
                .setDescription("Your rank card shows your devotion to the server and its sister command the leader board shows the top 10 acheavers in the server.")
                .setColor("RANDOM")
            )
        }
        else if (cmd.toLowerCase() === "lb")
        {
            message.channel.send(new MessageEmbed()
                .setDescription("")
            )
        }
    }
}