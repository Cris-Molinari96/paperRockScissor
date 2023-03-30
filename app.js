const startGameBtn = document.getElementById('start-game-btn');

// CONSTATI DI GIOCO
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';

let DEFAULT_CHOISE_PLAYER ;

// CONSTANTI CONDIZIONI DI VITTORIA
const RESULT_DRAW = 'DRAW';
const RESULT_WIN = 'WON';
const RESULT_LOSE = 'LOSE';


let gameIsRunning = false; 

const notisMatch = (cChoise, cmatch, pChoise = DEFAULT_CHOISE_PLAYER) => {
    let message = `The result of the match is:  computer = ${cChoise}, player = ${pChoise || DEFAULT_CHOISE_PLAYER}.` ;
    if(cmatch === RESULT_DRAW){
        message = `${message}` + ` The result is a ${cmatch}, you can try!!!`
        // alert( `${message}` + ` The result is a ${conditionMatch}, you can try!!!`);
    } else if ( cmatch === RESULT_WIN){
        message = `${message}` + ` You ${RESULT_WIN} bro, congratulation!`
        // alert(`${message}` + ` You ${RESULT_WIN} bro, congratulation`);
    } else{
        message = `${message}` + ` Sorry, but you ${RESULT_LOSE}`
        // alert(`${message}` + ` Sorry, but you ${RESULT_LOSE}`);
    }
    alert(message);
}

const getConditionResult = (cChoise, pChoise = DEFAULT_CHOISE_PLAYER) => 

    cChoise === pChoise ? RESULT_DRAW 
    : (cChoise === ROCK && pChoise === PAPER) ||  
    (cChoise === SCISSOR && pChoise === ROCK) || 
    (cChoise === PAPER && pChoise === SCISSOR) 
    ? RESULT_WIN 
    : RESULT_LOSE ; 
        

    // if( cChoise === pChoise ){
    //     return RESULT_DRAW ;
    // } else if (
    //     (cChoise === ROCK && pChoise === PAPER) ||
    //      (cChoise === SCISSOR && pChoise === ROCK) ||
    //      (cChoise === PAPER && pChoise === SCISSOR 
    //      ){
    //         return RESULT_WIN;
    //      } else {
    //        return RESULT_LOSE;
    //      }

const getComputerChoise = () => {
    const randomValue = Math.random();
    if( randomValue < 0.34 ){
        return ROCK ;
    } else if (randomValue < 0.67 ){
        return PAPER ;
    } else { 
        return SCISSOR;
    }
}

const getPlayerChoise = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR} ??` , '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSOR){
    
    DEFAULT_CHOISE_PLAYER = Math.random() ;
    console.log(DEFAULT_CHOISE_PLAYER);
    
    if(DEFAULT_CHOISE_PLAYER < 0.34){
        DEFAULT_CHOISE_PLAYER = 'ROCK';
        
    }else if (DEFAULT_CHOISE_PLAYER < 0.64){
        DEFAULT_CHOISE_PLAYER = 'PAPER';
    }else{
        DEFAULT_CHOISE_PLAYER = 'SCISSOR';
    }

    const playerDefault = DEFAULT_CHOISE_PLAYER ;

        alert(`The value choise for you is ${playerDefault}`);
        
        return playerDefault; 
    }
    return selection;
}

startGameBtn.addEventListener('click', () => {
    
    if(gameIsRunning){
        return ;
    }

    gameIsRunning = true;
    console.log('Game is starting....')

    const playerChoise = getPlayerChoise() ;
    console.log(playerChoise);

    const compuerChoise = getComputerChoise();
    console.log(compuerChoise);
    let conditionMatch;
    if(playerChoise){
        conditionMatch = getConditionResult(compuerChoise, playerChoise);
        console.log(conditionMatch);
    } else {
        conditionMatch = getConditionResult(compuerChoise);
        console.log(conditionMatch);
    }


    const matchNotis = notisMatch(compuerChoise, conditionMatch, playerChoise);
    gameIsRunning = false ; 

});