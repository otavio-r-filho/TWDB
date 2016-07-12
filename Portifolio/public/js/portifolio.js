var portifolio = {};

portifolio.addCSS = function(fileName) {
	var link = "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + fileName + "\">";
	return link;
}

portifolio.addScript = function(fileName, scriptType, aditionalParams) {
	var type = "text/javascript";
	var params = "";

	if(scriptType) { type = scriptType; }
	if(aditionalParams) { params = aditionalParams; }

	return "<script type=\"" + type + "\"" + params + " src=\"" + fileName + "\"></script>";
}

module.exports = portifolio;