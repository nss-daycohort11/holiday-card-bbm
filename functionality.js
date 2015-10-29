$("#translate_btn").click(function(){
	if($("#selection").val() === "french"){
		Language.setLexicon();
		Language.translateToFrench();
	} else if($("#selection").val() === "german"){
		Language.setLexicon();
		Language.translateToGerman();
	} else if($("#selection").val() === "italian"){
		Language.setLexicon();
		Language.translateToItalian();
	}
		
});