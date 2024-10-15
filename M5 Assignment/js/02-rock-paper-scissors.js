const RockPaperScissors = () => {
    const selArr = {R:'Rock', P:'Paper', S:'Scissors'};
//USER MAKE A CHOICE
    let Ukey;
    do {
        Ukey = window.prompt('Please choose rock (R), paper (P) or scissors (S)').toUpperCase();
    } while (!selArr[Ukey])
    const userChoice = selArr[Ukey];


    //COMPUTER MAKES A CHOICE
    const choices = ['Rock', 'Paper', 'Scissors']
    const randNum = Math.floor(Math.random()*3);
    const compChoice = choices[randNum]

    //DETERMINE WHO WINS
    if (userChoice ===compChoice){
        window.alert (`Result is a tie. Computer has also chosen ${compChoice}.`)
    } else if ((userChoice === 'Rock' && compChoice === 'Scissors')|| (userChoice ==='Scissors'&& compChoice === 'Paper') || (userChoice ==='Paper'&& compChoice ==='Rock')){
        window.alert (`Congrats! You win. Computer has chosen ${compChoice}.`)
    } else {
        window.alert(`Sorry, you lose. Computer has chosen ${compChoice}.`)
    }
    
}
RockPaperScissors()



