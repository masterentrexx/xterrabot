var tmi = require('tmi.js');

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "botname",
		password: "oauth:"
	},
	channels: ["#masterentrexx"]
};


var client = new tmi.client(options);
client.connect();

// Connect Message in der Console
client.on('connected', function(adress, port){
console.log("Adresse: " + adress + " Port: " + port);
client.say("masterentrexx", "Der Bot ist nun mit dem Stream verbunden!");
});

client.on("chat", function(channel, user, message, self) {
	 if(self) return



});

client.on("chat", function(channel, user, message, self) {
    if(message === "!twitter") {
      client.action("masterentrexx", "https://twitter.com/yt_entrexx");
    }
		if(message === "!instagram") {
			client.action("masterentrexx", "https://www.instagram.com/yt_entrexx/");
		}
		if(message === "!ts") {
			client.action("masterentrexx", "94:250:223:13:15105");
		}
		if(message === "!Spiel") {
			client.action("masterentrexx", "Master Entrexx Spielt zur zeit nur World of Warcraft");
		}
		if(message === "!homepage") {
			client.action("masterentrexx", "Unser Streamer Community homepage http://german-twitch-crew.eu/");
		}
});

client.on("subscription", function (channel, username, method, message, userstate) {
    // Do your stuff.
});

client.on("resub", function (channel, username, months, message, userstate, methods) {
    // Do your stuff.
});

client.on("connected", function(address, port) {
   client.action("masterentrexx ", "Hi und herzlich willkommen im Stream!");
});
