//DECLARE VARIABLE
let coinFlip

loopTime = parseInt(prompt("Enter the number of time you want to flip the coin? "))


for (let index = 0; index < loopTime; index++) {
    //RANDOMLY CREATE NUMBER
    let randomNum = Math.round(Math.random())

    //USE CONDITIONAL STATEMENT TO CHECK RESULT
    if (randomNum == 0){
        coinFlip = "Heads";
    } else{
        coinFlip = "Tails";
    }
    console.log(`${coinFlip}<br>`)
}
