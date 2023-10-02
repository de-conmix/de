function convert(){
    var input = document.querySelector("#input").value;
    var l = input.length;
    var output = converter(input, l);
    document.querySelector("#output").innerHTML = output;
}


document.addEventListener("DOMContentLoaded", () => {
    


})

var CHARS = "qwertyuiopasdfghjklzxcvbnm";
var MAX = 26;

function converter(string, n) {
  var string = string.split("");

  uMap = [];

  for (let i = 0; i < MAX; i++) {
    uMap[CHARS[i]] = CHARS[(i + 1) % MAX];

  }
  
  for (let i = 0; i < n; i++) {

    if (CHARS.includes(string[i])){
        if (string[i] == string[i].toUpperCase()) {
            string[i] = uMap[string[i].toLowerCase()].toUpperCase()
        }
        else{
            string[i] = uMap[string[i]];
        }
    }
    
  }
  return string.join("");
}

