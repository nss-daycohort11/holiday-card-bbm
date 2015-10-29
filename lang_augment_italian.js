var Language = (function(langPassed) {
	
	var italianTranslations =	
		{   "merry":"allegro", 
			"christmas":"natale", 
			"and":"e", 
			"happy":"contento", 
			"new":"nuovo", 
			"year":"anno"
		}

		var translatedArray = [];

	// public interface

		langPassed.translateToItalian = function() {	
		$("#translation").html("");
				// use function expression when you are returning something, so you need a variable to catch the return
			for (i = 0; i < Language.getLexicon()[0].length; i++) {
				var word = Language.getLexicon()[0][i];
				
				switch(word) {
					case "merry":
						console.log(italianTranslations.merry);
						translatedArray.push(italianTranslations.merry);
						break;
					case "christmas":
						console.log(italianTranslations.christmas);
						translatedArray.push(italianTranslations.christmas);
						break;
					case "and":
						console.log(italianTranslations.and);
						translatedArray.push(italianTranslations.and);
						break;
					case "happy":
						console.log(italianTranslations.happy);
						translatedArray.push(italianTranslations.happy);
						break;
					case "new":
						console.log(italianTranslations["new"]);
						translatedArray.push(italianTranslations["new"]);
						break;
					case "year":
						console.log(italianTranslations.year);
						translatedArray.push(italianTranslations.year);
						break;
				}
			};

			for (var i = 0; i < translatedArray.length; i++){
				$("#translation").append(translatedArray[i] + " ");
			}
			$("#tranlation").append(".");

		};

	return Language; 

})(Language);

console.log("Language", Language);



// One team member creates a Github project and adds the others as collaborators.
// Each team member picks a language.
// Your project should have one HTML file that has a textarea, a select element 
// with an option for each language, a button with a label of "Translate", and an empty 
// DOM element into which the translated text will be inserted.
// The team must discuss and choose a single variable name that will hold all of the logic that 
// the team creates (i.e. see the Sedan example above).
// Each team member will create one JavaScript file that contains one IIFE. Each teammate's IIFE will 
// augment the other teammates' IIFEs.
// The lexicon should be a private variable that cannot be accessed by the other team member's module 
// except through an accessor (getter) method.
// Each IIFE should expose, in its public interface, a method named translateTo{Language} 
 //(e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's 
  // value should be the text entered in by the user.
// The team should create an extra JavaScript file that handles interacting with the form elements and 
// determining which method should be called.
// Optional Bonus 1

// Find a way to write your IIFEs so that it doesn't matter whose module gets created first.
// Optional Bonus 2

// In addition to inserting the translated text into the HTML document, have the browser read the 
// translated text to the user.




