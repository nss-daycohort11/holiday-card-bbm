
//IFFEE
	//private interface
	var Language = (function(language) {
		var germanTranslations = {
			"merry":"frohe",
			"christmas":"Weihnachten",
			"and":"und",
			"a":"ein",
			"happy":"glückliches",
			"new":"nues",
			"year":"jahr"
		};

		var translatedArray= [];

	// public interface
		language.translateToGerman = function() {
			for (var i = 0; i < Language.getLexicon()[0].length; i++) {
				var word = Language.getLexicon()[0][i];
				switch(word){
					case "merry":
						console.log(germanTranslations.merry);
						translatedArray.push(germanTranslations.merry);
						break;
					case "christmas":
						console.log(germanTranslations.christmas);
						translatedArray.push(germanTranslations.christmas);
						break;
					case "and":
						console.log(germanTranslations.and);
						translatedArray.push(germanTranslations.and);
						break;
					case "a":
						console.log(germanTranslations.a);
						translatedArray.push(germanTranslations.a);
						break;
					case "happy":
						console.log(germanTranslations.happy);
						translatedArray.push(germanTranslations.happy);
						break;
					case "new":
						console.log(germanTranslations["new"]);
						translatedArray.push(germanTranslations["new"]);
						break;
					case "year":
						console.log(germanTranslations.year);
						translatedArray.push(germanTranslations.year);
						break;
				}
			};

			for(var i = 0; i < translatedArray.length; i++) {
				$("#translation").append(translatedArray[i]+ " ")
			}

			$("#translation").append(".");

		};

		return Language;

	})(Language);


