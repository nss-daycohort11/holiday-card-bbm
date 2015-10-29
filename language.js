var Language = (function() {
	//private interface
	var lexicon =[];


	//get user input
		//covert user input to lowercase for usability
		//convert input string to array
		//two options
			//compare new array to our lexicon array
			//take new array and place in language object


	// public interface
	return {
		getLexicon: function() {
			return lexicon;
		},


		 setLexicon: function(){
		var userInput = $("#inputBox").val();
		var inputLower = userInput.toLowerCase();
		
		//convert this to array
		var inputArray = inputLower.split(" ");
		
		lexicon.push(inputArray);

		// 	//push array into lexicon variable
		 }

	};

})();


console.log("language", Language);

