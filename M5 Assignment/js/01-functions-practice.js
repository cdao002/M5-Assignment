//STEP 1
const halfNumber = (num) => {
    if (!isNaN(num)){ 
        console.log (`Half of ${num} is ${num/2}.`)
    } else {
        console.log ('Input is not a valid number. ')
    }
}
halfNumber(15)

//STEP 2
const squareNumber = (num) => {
    if (!isNaN(num)){
        console.log(`The result of squaring the number ${num} is ${Math.pow(num,2)}.`)
    } else {
        console.log ('Input is not a valid number. ')
    }
}
squareNumber(3)

//STEP 3
const percentOf = (num1, num2) => {
    if (!isNaN(num1) && !isNaN(num2) && (num2 !==0)){
        console.log (`${num1} is ${num1*100/num2}% of ${num2}.`)
    } else {
        console.log ('Input(s) is/are not (a) valid number(s) or the second number is zero.')

    }
}
percentOf(2,4)

//STEP 4
const findModulus = (num1, num2) => {
    if (!isNaN(num1) && !isNaN(num2) && num2 !==0){
        console.log (`${num1%num2} is the modulus of ${num1} and ${num2}. I CANNOT SAY IN REVERSE ORDER BECAUSE IT MEANS INCORRECT ENGLISH! `)
    } else {
        console.log ('Cannot calculate modulus by zero')
    }
}
findModulus(10,4)

//STEP 5