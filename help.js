const Discord = require('discord.js'); 

module.exports.run = async(client, message, args) => {

    let embed = new Discord.MessageEmbed()
        .setColor("#ff000f")
        .setTitle("Commande **Help** : Page d'aides !")
        .addField("__Commande modération :__", `ban :\nBannir l'utilisateur mentionné !\nkick :\nExpulser l'utilisateur mentionné !`)
        .addField("__Commande funs :__", "Soon")
        .addField("__Commande utilitaires :__", `ping :\nVoir le temps de réponse du client !\nhelp : \nPage d'aides des commandes !`)
    message.channel.send(embed)
}

module.exports.help = {
    name: "help"
}