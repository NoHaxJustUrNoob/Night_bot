const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    var m = await message.channel.send("Ping")

    let ping = m.createdTimestamp - message.createdTimestamp;

    m.edit(`Ping : ${client.ws.ping} ms`);
};

module.exports.help = {
    name: "ping"
}