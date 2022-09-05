var inputTxt = document.querySelector("#input-txt");
var btnTranslate = document.querySelector("#btn-translate");
var outputTxt = document.querySelector("#output-txt");

btnTranslate.addEventListener("click", onClick);

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  console.log("error occured: ", error);
  alert("something wrong with server! try again after sometime");
}

function onClick() {
  var inputText = inputTxt.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputTxt.innerHTML = translatedText;
    })
    .catch(errorHandler);
}
