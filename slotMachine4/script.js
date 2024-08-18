// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. collect a bet amount 
// 4. spin the slot machine 
// 5. check if the user won 
// 6. Give the suer their winnings 
// 7. play again

const prompt = require("prompt-sync")();

// global variables 
const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    'A' : 2,
    'B' : 4,
    'C' : 6,
    'D' : 8
}

const SYMBOL_VALUESS = {
    'A' : 5,
    'B' : 4,
    'C' : 3,
    'D' : 2
}



// 1
const deposit = () => {
    while(true){
        const depositAmount = parseFloat(prompt("Enter a Deposit Amount : "));

        if(isNaN(depositAmount) || depositAmount == 0){
            console.log("Invalid Deposit! Try Again...");
        }else{
            return depositAmount;
        }
    }

};


// 2
const getNumberOfLines = () => {
    while(true){
        const lines = parseFloat(prompt("Enter a number of betting Lines : "));

        if(isNaN(lines) || lines == 0 || lines > 3){
            console.log("Invalid number of Lines! Try Again...");
        }else{
            return lines;
        }
    }
}


// 3
const getBet = (balance,lines) => {
    while(true){
        const bet = parseFloat(prompt("Enter a bet per lines : "));

        if(isNaN(bet) || bet == 0 || bet > balance/lines){
            console.log("Invalid Amount of Bet Placed! Try Again...");
        }else{
            return bet;
        }
    }
}

// Object.entries() returns the key and values of any object types

const spin = () => {
    const symbols = [] // generating the array or row for the spin 
    for(const[symbol,count] of Object.entries(SYMBOL_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
    }
    console.log(symbols);
};
spin();



let balance = deposit();
const numberOfLines= getNumberOfLines();
const totalBet = getBet(balance,numberOfLines);