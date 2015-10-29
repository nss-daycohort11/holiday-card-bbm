var Language = (function() {

  
	
	//private interface
	var lexicon =[];

	
	// public interface
	return {
		getLexicon: function() {
			return lexicon;
		},
		setLexicon: function(arg) {
			var userInput = $("#inputBox").val();  //get users input
			console.log(userInput);

			var makeSmall = userInput.toLowerCase();
			console.log(makeSmall);

			var inputArray = makeSmall.split(" ");
			console.log(inputArray);

			lexicon.push(inputArray);
			console.log("lexicon", lexicon);
		}
	};

})();

console.log("language", Language);

