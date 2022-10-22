// Clear button
function eraseText() {
document.getElementById("display").value = "";
}

function ShowInput(value) {
document.getElementById("display").value += value;
}

// Sin
function calculate() {
var inputString = document.getElementById("display").value;
if (inputString.includes("Sin")) {
var number = inputString.substr(4, inputString.length);
document.getElementById("display").value = Math.sin(number);
}

// Cos
else if (inputString.includes("Cos"))
{
var number = inputString.substr(4, inputString.length);
document.getElementById("display").value = Math.cos(number);
}

// Tan
else if (inputString.includes("Tan")) {
var number = inputString.substr(4, inputString.length);
document.getElementById("display").value = Math.tan(number);
}

// Evaluates +-*/% mathematic operations
else {
var output = eval(inputString);
document.getElementById("display").value = output;
}
}