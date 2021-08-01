const { error, timeStamp } = require('console');
const { MessageEmbed, Client, Collection, Activity, MessageCollector } = require('discord.js')
const levels = require('discord-xp')
const random = require("random")
levels.setURL("mongodb+srv://scram:scram@cluster0.tinss.mongodb.net/data")
console.log("Connected to Mongodb Database")
class ModmailClient extends Client {
    constructor() {
        super();
        /*
        dependencies
        */
       this.path = require('path')
       this.discord = require('discord.js')
       this.fs = require('fs')
       this.Random = require('random')
       this.jsonfile = require('jsonfile')
       /*
       Collections
       */ 
      this.commands = new Collection();
      this.threads = new Collection();
      /*
      constants
      */
        this.prefix = "vg!"
    }
    commandHandler(path) {
        this.fs.readdirSync(this.path.normalize(path)).map((f) => {
            const File = require(this.path.join(__dirname, `..`, path, f));
            this.commands.set(File.name, File)
        });
    }
    getCommand(cmd) {
        return this.commands.has(cmd) ? this.commands.get(cmd) : false;
    }
    start(token, path){
        this.commandHandler(path);
        this.login(token)
        this.on('ready', async () => {
            console.log("I am online and at your service")
            this.user.setActivity({
                name: `vg!help`,
                type: "LISTENING"
            })
            
        })
        this.on('message', async message => {
            this.user.setActivity({
                name: `vg!help`,
                type: "LISTENING"
            })
            const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
            if(message.author.bot)
            {
                return;
            }
            const randomXP = random.int(150, 250)

            const hasLvlup = await levels.appendXp(message.author.id, message.guild.id, randomXP)
            if (hasLvlup)
            {
                const user = await levels.fetch(message.author.id, message.guild.id)
                const channel = this.channels.cache.find(channel => channel.id === "870069438811099136")
                channel.send(new MessageEmbed()
                    .setDescription(`${message.author}, Has leveled up to ${user.level}`)
                    .setColor("GREEN")
                )
            }
            if(!message.guild || !message.content.toLowerCase().startsWith(this.prefix)) return;
            const cmd = args.shift().toLowerCase();
            const command = this.getCommand(cmd)
            if(command) return command.run(this, message, args).catch(console.error);
        })
        
            
        
    }
    embed(data, message) {
        return new MessageEmbed(data) .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: "png"}))
    }
}
module.exports = ModmailClient