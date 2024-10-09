for (let index = 1; index <= 100; index++) {
    if (index%3 ==0){
        if (index%5 ==0){
            document.write(`Marco! Polo!<br>`)
        }else{
            document.write(`Marco!<br>`)
        } 
    } else if (index%5 ==0){
        document.write(`Polo! <br>`)
    } else {
        document.write(`${index} <br>`)
    }
    
}