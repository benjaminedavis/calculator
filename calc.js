var numButtons = document.querySelectorAll(".digit");
var operButtons = document.querySelectorAll(".operator");
var buttonC = document.querySelector("#clearbutton");
var button1 = document.querySelector("#one");
var button2 = document.querySelector("#two");
var button3 = document.querySelector("#three");
var button4 = document.querySelector("#four");
var button5 = document.querySelector("#five");
var button6 = document.querySelector("#six");
var button7 = document.querySelector("#seven");
var button8 = document.querySelector("#eight");
var button9 = document.querySelector("#nine");
var buttonDot = document.querySelector("#decimal");
var buttonPlus = document.querySelector("#add");
var buttonMinus = document.querySelector("#subtract");
var buttonDiv = document.querySelector("#divide");
var buttonTimes = document.querySelector("#multiply");
var buttonEquals = document.querySelector("#equal");
var myDisplay = document.querySelector("#display");
var myText = document.querySelector(".textOper");
var currentOper = 0;
var currentResult = 0;
var helper = 0;

// This is my event listener for the Clear button.
buttonC.addEventListener('click', clearDisplay);
  function clearDisplay(){
    myDisplay.innerText = 0;
    myText.innerText = "";
    currentOper = 0;
    currentResult = 0;
    helper = 0;
  }
// These are my event listeners for my number and dot buttons.
for(i = 0; i < 11; i++){
numButtons[i].addEventListener('click', onNumClick);
}
function onNumClick(){
  if (currentOper === "="){
    myDisplay.innerText = this.innerText;
    myText.innerText = this.innerText;
    currentOper = 0;
    helper = 2;
  } else if (myDisplay.innerText !== "0" && helper === 2){
    myText.innerText = myDisplay.innerText + this.innerText;
    myDisplay.innerText = myDisplay.innerText + this.innerText;
  } else if (myDisplay.innerText !== "0" && helper === 0){
    myDisplay.innerText = myDisplay.innerText + this.innerText;
    myText.innerText = currentResult + " " + currentOper + " " + myDisplay.innerText;
  } else if(helper === 1){
    myDisplay.innerText = this.innerText;
    myText.innerText = currentResult + " " + currentOper + " " + this.innerText;
    helper = 0;
  } else {
    myDisplay.innerText = this.innerText;
    myText.innerText = this.innerText;
    helper = 2;
  }
}

// These are my event listeners for my operation buttons.
for(i = 0; i < 4; i++){
operButtons[i].addEventListener('click', onOperClick);
}
function onOperClick(){
  if(currentOper === 0 || currentOper === "="){
  currentResult = myDisplay.innerText;
  currentOper = this.innerText;
  myText.innerText = currentResult + " " + currentOper;
  helper = 1;
} else {
  currentResult = calculate();
  currentOper = this.innerText;
  myText.innerText = myText.innerText + " =";
  myDisplay.innerText = currentResult;
  helper = 1;
  }
}

// This is my event listener for the Equal button.
buttonEquals.addEventListener('click', finalResult);
  function finalResult(){
    currentResult = calculate();
    myText.innerText = myText.innerText + " =";
    myDisplay.innerText = currentResult;
    helper = 0;
    currentOper = "=";
  }

// Function to calculate without using eval.
function calculate(){
  if (currentOper === "+"){
    var sum = Number(currentResult) + Number(myDisplay.innerText);
    return sum;
  } else if (currentOper === "-"){
    var minus = Number(currentResult) - Number(myDisplay.innerText);
    return minus;
  } else if (currentOper === "*"){
    var times = Number(currentResult) * Number(myDisplay.innerText);
    return times;
  } else if (currentOper === "/"){
    var divide = Number(currentResult) / Number(myDisplay.innerText);
    return divide;
  }
}
