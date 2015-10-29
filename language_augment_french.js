var Language = (function(langObjPassed){

	//private interface
	var frenchTranslations = {
		"merry":"gai",
		"christmas":"Noël",
		"and":"et",
		"a": "un",
		"happy":"content",
		"new":"neuf", 
		"year":"an" 
	};

	var translatedArray = [];

//public interface
	langObjPassed.translateToFrench = function(){
		$("#translation").html("");
		for (var i = 0; i < Language.getLexicon()[0].length; i++) {
				var word = Language.getLexicon()[0][i];
				// var wordToString = word.toString();
				// console.log(wordToString);
				// console.log(frenchTranslations.merry);
				switch(word){
					case "merry":
						console.log(frenchTranslations.merry);
						translatedArray.push(frenchTranslations.merry);
						break;
					case "christmas":
						console.log(frenchTranslations.christmas);
						translatedArray.push(frenchTranslations.christmas);
						break;
					case "and":
						console.log(frenchTranslations.and);
						translatedArray.push(frenchTranslations.and);
						break;
					case "a":
						console.log(frenchTranslations.a);
						translatedArray.push(frenchTranslations.a);
						break;
					case "happy":
						console.log(frenchTranslations.happy);
						translatedArray.push(frenchTranslations.happy);
						break;
					case "new":
						console.log(frenchTranslations["new"]);
						translatedArray.push(frenchTranslations["new"]);
						break;
					case "year":
						console.log(frenchTranslations.year);
						translatedArray.push(frenchTranslations.year);
						break;
			}

		};

		for(var i = 0; i < translatedArray.length; i++ ){
			$("#translation").append(translatedArray[i]+" ");
		}

		$("#translation").append(".");
	};

	return Language;

})(Language);



// console.log(frenchTranslations.merry, frenchTranslations.christmas );
