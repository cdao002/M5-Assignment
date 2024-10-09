let yrNum;
yrNum = parseInt(prompt ("Give me a number to count down to zero: "))

if(!isNaN(yrNum) && (yrNum>=0)){
    while (yrNum>=0){
        document.write(` ${yrNum} <br>`);
        yrNum--;
    }

}