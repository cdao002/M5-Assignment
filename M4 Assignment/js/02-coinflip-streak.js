//DECLARE VARIABLE
let coinFlip

//CREATE DO WHILE LOOP

coinFlip = ""
do {
    //RANDOMLY CREATE NUMBER
    let randomNum = Math.round(Math.random())

    //USE CONDITIONAL STATEMENT TO CHECK RESULT
    if (randomNum == 0){
        coinFlip = "Heads";
    } else{
        coinFlip = "Tails";
    }
    console.log(`${coinFlip}<br>`)
    

} while (coinFlip !== "Tails");