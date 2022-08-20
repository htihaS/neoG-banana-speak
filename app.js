var btnTranslate=document.querySelector('#btn-translate');
var inputtextarea=document.querySelector('#textarea-input');
var outputtextarea=document.querySelector('#textarea-output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(input) {
    return serverURL + "?" + "text=" + input
}


btnTranslate.addEventListener("click",function clickEventListner() {
    var input = inputtextarea.value;

    fetch(getTranslationUrl(input))
    .then(response => response.json())
    .then(json => {
        var tranlatedtext = json.contents.translated;
        outputtextarea.innerText=tranlatedtext;
    })
})
