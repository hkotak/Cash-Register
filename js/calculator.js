//ADDING FUNCTIONALILY TO THE CALCULATOR
(function() {

var val1;
var operator;
var toAdd;
var toSub;
var toMul;
var toDiv;

//DISPLAY SCREEN 
var displayScreen = document.getElementById('screen');
var screenElem = displayScreen.innerHTML = null;

//FUNCTIONS TO PRINT NUMBER VALUES
var getValue = document.getElementsByClassName('value');
for (var i=0; i<getValue.length; i++) {
    getValue[i].addEventListener('click', printValue);
}

function printValue() {
    // console.log(this.innerHTML);
    val1 = displayScreen.innerHTML += this.innerHTML;
    var integer = parseInt(val1, 10);
    console.log(typeof integer);
    
}
//FUNCTIONS TO ADD EVENTS TO OPERATOR BUTTONS
var getOps = document.getElementsByClassName('operator');
for (var i=0; i<getOps.length; i++) {
    getOps[i].addEventListener('click', operatorButton);
}

function operatorButton() {
    operator = this.innerHTML;
    console.log(operator);
    console.log(typeof operator);

    if (operator === "=") {
        val1 = displayScreen.innerHTML;
        if(toAdd) {
            displayScreen.innerHTML = Number(toAdd) + Number(val1);
            toAdd = null;
        }
        else if(toSub) {
            displayScreen.innerHTML = Number(toSub) - Number(val1);
            toSub = null;
        }
        else if(toMul) {
            displayScreen.innerHTML = Number(toMul) * Number(val1);
            toMul = null;
        }
        else if(toDiv) {
            displayScreen.innerHTML = Number(toDiv) / Number(val1);
            toDiv = null;
        }
    }
    else if (operator === "+") {
        toAdd = displayScreen.innerHTML;
        displayScreen.innerHTML = null;
    }
    else if (operator === "-") {
        toSub = displayScreen.innerHTML;
        displayScreen.innerHTML = null;
    }
    else if (operator === "x") {
        toMul = displayScreen.innerHTML;
        displayScreen.innerHTML = null;
    }
    else if (operator === "/") {
        toDiv = displayScreen.innerHTML;
        displayScreen.innerHTML = null;
    }
    else if (operator === 'AC') {
        displayScreen.innerHTML = null;
    }
    
}


// //PRINT RESULTS
// var equalElem = document.getElementById('equal');
// equalElem.addEventListener('click', printResult);
//     function printResult() {
//         operator = this.innerHTML;
//         console.log(typeof operator);
//     }

// //OPERATOR FUNCTIONS
// var clearElem = document.getElementById('allClear');
// clearElem.addEventListener('click', allClear);
// function allClear() {
//     displayScreen.innerHTML = null;
// }

// var additionElem = document.getElementById('add');
// additionElem.addEventListener('click', addition);
// function addition() {
//     operator = displayScreen.innerHTML += this.innerHTML;
//     // console.log(typeof operator);

//     if(operator === "=") {
//         num = displayScreen.innerHTML;
//             if (!!toAdd) {
//                 displayScreen.innerHTML = toAdd + num;
//                 toAdd = null;
//             }
//     }
// };

// var subtractElem = document.getElementById('subtract');
// subtractElem.addEventListener('click', subtraction);
// function subtraction() {
//     operator = displayScreen.innerHTML += this.innerHTML;
// }

// var multiplyElem = document.getElementById('multiply');
// multiplyElem.addEventListener('click', multiplication);
// function multiplication() {
//     operator = displayScreen.innerHTML += this.innerHTML;

// }

// var divisionElem = document.getElementById('divide');
// divisionElem.addEventListener('click', division);
// function division() {
//     operator = displayScreen.innerHTML += this.innerHTML;
// };



}());