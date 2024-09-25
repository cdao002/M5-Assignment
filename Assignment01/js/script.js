// STEP 1
// Convert the following highlighted identifiers to Camel Case notation:
/*
let someMonth
function theMonth()
let currentMonth
let summerMonth
let myLibraryFunction
*/


// STEP 2
/*
example of a numeric literal expression: 9
example of a string literal expression:  "September"
example of a Boolean literal expression: false
example of a null literal expression:  null
*/

// STEP 3
// two examples of complex / variable expressions.
/*
let total = price + shipping + price*0.1
let answer = "The cost for getting your item is " + total
*/


//STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
/*
let strLastName
let strAddress
let strCity
let strState
let strZipCode
let intYourAge
let strReferralSource
let boolMayWeContactYou
*/



//STEP 5
// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables./
/*
let strFirstName; strFirstName = "Christine"
let strLastName = 'Dao'
let strState = 'CA', strZipCode = '92843'
*/



//STEP 6
// Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.
/*
let number = 123
console. log ("The secret number is "+ number)
*/



//STEP 7
// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.
/*
let a
let b
a = true + " is my answer for this question."
b = 1000 + true
console.log(a)
console.log(b) 
*/


//STEP 8
// Is the following string literal valid? If not, how would you fix it?
/* Yes the string is valid but need backslashes to escape quotes. Here is to fix:
let someString = 'Who once said,"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)
*/


//STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
/*
let nullVal = null
console.log(nullVal)
let unDef 
console.log (unDef)
*/

// STEP 0
// Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
/*
console.log(typeof(a = "Hello"))
console.log(typeof(a = 12345))
console.log(typeof(a = false))
console.log(typeof(a = null))
console.log(typeof(unk))
*/

// STEP 1
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
/*
let name= "Zak Ruvalcaba"
window.alert("Hello " + name", welcome to the JavaScript class!")
name = "Christine Dao"
*/



//STEP 2
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.
/*
let name = "Christine Dao"
window.alert("Hello " + name+", welcome to the JavaScript class!")
*/

// STEP 3
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
/*
let name = "Christine Dao"
let course = "JavaScript"
window.alert("Hello " + name+ ", welcome to the " + course +" class!")
*/

//STEP 4
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
/*
let name = "Zak Ruvalcaba"
let course = "JavaScript"
window.alert("Hello " + name +".\nWelcome to the " + course +" class!")
*/

//STEP 5
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
/*
let course = "JavaScript"
name = window.prompt("What is your name?")
window.alert("Hello " + name +".\nWelcome to the " + course +" class!")
*/

//STEP 6
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
/*
let name = window.prompt("What is your name?")
let course = window.prompt("What class are you taking? ")
window.alert("Hello " + name +".\nWelcome to the " + course +" class!")
*/

//STEP 7
// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.
/*
let x  = 10
let y = 20
console.log (x+y)
*/

//STEP 8
// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
/*
let x =20
x += 20
console.log (x)
*/

//STEP 9
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
/*
let x = 20
x *= 5
console.log(x)
*/


//STEP 0
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
/*
let x = 20%3
x /=1
console.log(x)
*/

// STEP 1
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
/*
console.log (6>1 || 5<7)
*/

//STEP 2
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
/*
console.log ((20/5) <=(11-32))
*/