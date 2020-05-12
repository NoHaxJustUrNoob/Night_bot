const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./config.json")

const fs = require("fs");
client.commands = new Discord.Collection();

fs.readdir('./Commandes/', (error, f) => {
  if (error) { return console.error(error); }
      let commandes = f.filter(f => f.split('.').pop() === 'js');
      if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

      commandes.forEach((f) => {
          let commande = require(`./Commandes/${f}`);
          console.log(`${f} commande chargée !`);
          let commandName = f.split(".")[0];
          client.commands.set(commandName, commande);
      });
});

fs.readdir("./Events/", (error, f) => {
    if (error) {
        return console.error(error);
    }
    console.log(`Fichier d'event ${f} chargé avec succès !`);

    f.forEach(f => {
        let events = require(`./Events/${f}`);
        let event = f.split(".")[0];
        client.on(event, events.bind(null, client));
    });
});

client.login(config.token)

var prefix = "-"

client.on('ready', () => {
    console.log("En marche !")
    client.user.setStatus("dnd")
})

client.on('message', message => {
    if(message.content === `${prefix}test`) {
        message.reply("Ceci est un test")
    }
})