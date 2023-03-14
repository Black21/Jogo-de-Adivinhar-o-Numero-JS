let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxTry = 10;

function newGame(){
    window.location.reload();
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
        var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }
function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  console.log("Resposta: " + computerNumber);
}

function compareNumbers() {
  const userNumber = Number(document.getElementById("inputBox").value);
  userNumbers.push(" " + userNumber);
  document.getElementById("guesses").innerHTML = userNumbers;

  if (attempts < maxTry) {
    if (userNumber > computerNumber) {
      document.getElementById("textOutput").innerHTML = "Está alto";
      document.getElementById("inputBox").value = "";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else if (userNumber < computerNumber) {
      document.getElementById("textOutput").innerHTML = "Está baixo";
      document.getElementById("inputBox").value = "";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
    } else {
      document.getElementById("textOutput").innerHTML =
        "Parabéns, Você Acertou!!!";
      attempts++;
      document.getElementById("attempts").innerHTML = attempts;
      document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
    }
  } else {
    document.getElementById("textOutput").innerHTML =
      "Você Perdeu! O número certo era: " + computerNumber;
    document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
  }
}
