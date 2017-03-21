const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "MjgzMTA3Mjg3NzMwNjE4MzY5.C4wQug.M90nVbosxnwtuy8KJxo_7Xcsk4E";

var bayes = require('bayes');
var classifier = bayes();

// npm install discord.js --save
// npm install bayes

bot.on("ready", () => {
	// Once the bot is ready, let us know by logging this message into the console
	console.log("Bot is connected!");

	// Once the bot is ready, learns about the categories to classify
	learnClassifier();	
});

function learnClassifier(){

	var examplesNazi = "nazi, nazies, adolf, jew, jewish, hitler, reich, gas camara, germany";
	var categoryNazi = "nazi";

	var examplesRacist = "racism, racist, black people, black person, steal, jail, cells, shooting, starve, starvation, US, USA, Africa, Ethiopia, bullet, niggers, nigga, nigger, cotton, mexican, cop";
	var categoryRacist = "racist";

	var examplesReligion = "religion, nail, hang, jesus, jewish, Allahu Akbar, god";
	var categoryReligion = "religion";

	var examplesKidsNSFW = "pedophile, dead babies, dead kids, babies, worse, cancer, life support, sex, panties, underware, sexually active, no hands, blind, grave, deaf, autism, child, children, fuck, fucking, die, died, AIDS";

	// * Testing improoves in learning with actual jokes instead of tags * \\
	examplesKidsNFSW = examplesKidsNSFW.concat(" How many babies do you need to paint a room? Depends on how hard you throw them. ");
	examplesKidsNFSW = examplesKidsNSFW.concat(" How do you stop a baby from crawling in circles? Nail the other foot to the floor. ");
	examplesKidsNFSW = examplesKidsNSFW.concat(" What's the difference between a trailer full of bowling balls and a trailer full of baby's? You can't unload the bowling balls with a pitchfork. ");
	examplesKidsNFSW = examplesKidsNSFW.concat(" I'm having sex with this chick, and I get AIDS!!! I mean, how does a 9 year old get AIDS? My sister has been hanging with the wrong crowd. ");
	// * Testing improoves in learning with actual jokes instead of tags * \\

	var categoryKidsNSFW = "pedophile";

	var examplesFeminism = "woman's rights, feminism, cant change anything, woman";
	var categoryFeminism = "feminism";

	var examplesWhite = "";
	var categoryWhite = "white";

	classifier.learn(examplesNazi, categoryNazi);
	classifier.learn(examplesRacist, categoryRacist);
	
	classifier.learn(examplesKidsNSFW, categoryKidsNSFW);
	classifier.learn(examplesFeminism, categoryFeminism);
}

// Sends a message to user
function sendMessage(userId, messageToSend){
	bot.users.get(userId).sendMessage(messageToSend);
}

// Returns true if the message belongs to a guild
function isAGuildMessage(message){
	return message.guild !== null;
}

// Reacts to message with the identifier of the emoji
function reactToMessage(message, emoji){
	if (!isAGuildMessage(message)){
		return;
	}

	var reactionEmoji = message.guild.emojis.find('name', emoji);

	if (reactionEmoji !== null){
		message.react(reactionEmoji)
		.then()
		.catch(()=>console.error("Could not react with "+emoji+" to message."));
	}
}

bot.on("message", (msg) => {
	var includesMiku = false;

	// The bot should not answer itself
	if(msg.author.id == miku.discordID){
		return
	}

	// * Testing direct messages * \\
	/*
	
	if(msg.guild === null){
		return;
	}

	if (msg.guild.id !== "219547264127991810"){
		return;
	}
	
	*/
	
	var category = classifier.categorize(msg.content);	
	msg.reply(category);
	if(category == "nazi"){
		reactToMessage(msg, "Nazi");
	}

});

bot.login(token);