var language = (function() {
	//private interface
	var lexicon =["merry", "christmas", "and", "a", "happy", "new", "year"];

	// public interface
	return {
		getLexicon: function() {
			return lexicon;
		}
	};

})();

console.log("language", language);