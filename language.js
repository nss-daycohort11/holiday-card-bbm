var Language = (function() {
	//private interface
	var lexicon =[];

	// public interface
	return {
		getLexicon: function() {
			return lexicon;
		},

		setLexicon: function() {
			var userInput = $("#inputBox").val();
			var inputLower = userInput.toLowerCase();

			var inputArray = inputLower.split(" ");

			lexicon.push(inputArray);
			console.log(lexicon);
		}
	};

})();

console.log("language", Language);

