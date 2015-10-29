$("#translate_btn").click(function(){
	if($("#selection").val() === "french"){
		Language.setLexicon();
		Language.translateToFrench();
		Language.clearLexicon();
	} else if($("#selection").val() === "german"){
		Language.setLexicon();
		Language.translateToGerman();
		Language.clearLexicon();
	} else if($("#selection").val() === "italian"){
		Language.setLexicon();
		Language.translateToItalian();
		Language.clearLexicon();
	}
		
});