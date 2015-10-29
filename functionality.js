$("#translate_btn").click(function(){
	if($("#selection").val() === "french"){
		Language.setLexicon();
		Language.translateToFrench();
			var innerText = $("#translation").html();
			var worte = new SpeechSynthesisUtterance(innerText);
			var stimmen = window.speechSynthesis.getVoices();
			worte.voice = stimmen[6];
			window.speechSynthesis.speak(worte);
		Language.clearLexicon();
	} else if($("#selection").val() === "german"){
		Language.setLexicon();
		Language.translateToGerman();
			var innerText = $("#translation").html();
			var worte = new SpeechSynthesisUtterance(innerText);
			var stimmen = window.speechSynthesis.getVoices();
			worte.voice = stimmen[6];
			window.speechSynthesis.speak(worte);
		Language.clearLexicon();
	} else if($("#selection").val() === "italian"){
		Language.setLexicon();
		Language.translateToItalian();
			var innerText = $("#translation").html();
			var worte = new SpeechSynthesisUtterance(innerText);
			var stimmen = window.speechSynthesis.getVoices();
			worte.voice = stimmen[6];
			window.speechSynthesis.speak(worte);
		Language.clearLexicon();
	}
		
});