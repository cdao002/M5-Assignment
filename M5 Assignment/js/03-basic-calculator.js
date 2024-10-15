// ADD A FUNCTION CALLED CALCULATE
const calculate = (x,y,op)=>{  
    switch (op){
        case 'A':
            return x+y;
        case 'S':
            return x-y;
        case 'M':
            return x*y;
        case 'D':
            if (y!==0){
            return x/y;
            } 
        default:
            return null;
    }
}


// COLLECT FIRST NUMBER FROM USER
let firstNum;
do {
    firstNum = parseFloat(prompt('Enter the first number'));
} while (isNaN(firstNum))

// COLLECT SECOND NUMBER FROM USER
let secNum;
do {
    secNum = parseFloat(prompt('Enter the second number'));
} while (isNaN(secNum))

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let op;
do {
     op = prompt('Enter the operation you would like to perform: \n A : add \n S : substract \n M:  multiply \n D : divide \n').toUpperCase();
} while (op !=='A' && op !=='S' && op !=='M' && op!=='D')


// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
result = calculate(firstNum, secNum, op);
if (result===null){
    alert("Cannot divide by 0")
} else {
    r = {A: 'adding', S: 'substracting', M: 'multiplying', D:'dividing'}
    alert(`The result of ${r[op]} ${firstNum} and ${secNum} is: ${result}.`)
}

