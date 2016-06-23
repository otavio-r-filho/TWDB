//Select the first <p> tag 
var tag;
tag = document.getElementById("first");
//Because we do have 2 object with this class the [0] part will give me only the first one
tag = document.getElementByClassName("special")[0];
tag = document.getElementByTagName("p")[0];
tag = document.querySelector("#first");
tag = document.querySelector(".special");
tag = document.querySelector("p");