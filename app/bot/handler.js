// Bot logic goes here.

var bayes = require('bayes');
var classifier = bayes();

learnClassifier();	

module.exports = (message, sender) => {
    
    // sender.sendImage(imageUrl)
	var category = classifier.categorize(msg.content);	
	sender.sendText(category);
	// Así se responde con el bot de discord
	// msg.reply(category);

}

function learnClassifier(){
	var examplesNazi = "nazi, nazies, adolf, jew, jewish, hitler, reich, gas camara, germany";
	var categoryNazi = "nazi";

	var examplesRacist = "racism, racist, black people, black person, steal, jail, cells, shooting, starve, starvation, US, USA, Africa, Ethiopia, bullet, niggers, nigga, nigger, cotton, mexican, cop";
	var categoryRacist = "racist";

	var examplesReligion = "religion, nail, hang, jesus, jewish, Allahu Akbar, god";
	var categoryReligion = "religion";

	var examplesKidsNSFW = "pedophile, dead babies, dead kids, babies, worse, cancer, life support, sex, panties, underware, sexually active, no hands, blind, grave, deaf, autism, child, children, fuck, fucking, die, died, AIDS";

	// * Testing improves in learning with actual jokes instead of tags * \\
	examplesKidsNFSW = examplesKidsNSFW.concat(" How many babies do you need to paint a room? Depends on how hard you throw them. ");
	examplesKidsNFSW = examplesKidsNSFW.concat(" How do you stop a baby from crawling in circles? Nail the other foot to the floor. ");
	examplesKidsNFSW = examplesKidsNSFW.concat(" What's the difference between a trailer full of bowling balls and a trailer full of baby's? You can't unload the bowling balls with a pitchfork. ");
	examplesKidsNFSW = examplesKidsNSFW.concat(" I'm having sex with this chick, and I get AIDS!!! I mean, how does a 9 year old get AIDS? My sister has been hanging with the wrong crowd. ");
	// * Testing improves in learning with actual jokes instead of tags * \\

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