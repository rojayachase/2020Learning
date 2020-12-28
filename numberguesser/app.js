// GAME FUNCTION:
// -Player must guess a number between a min and a max
// -Play gets a certain amount of guesses
// -Notify player of guesses remaining
// -Notify the player of the correct answer if they lose
// -Let player choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'); //id
    minNum = document.querySelector('.min-num'); //class
    maxNum = document.querySelector('.max-num'); //class
    guessBtn = document.querySelector('#guess-btn'); //id
    guessInput = document.querySelector('#guess-input'); //id
    message = document.querySelector('.message'); //class

//Assign UI min and max
minNum.textContent = min; //game values are set to the UI
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
 if(e.target.className === 'play-again'){
 window.location.reload();
}
});

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
//validate
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
//Check if won
    if(guess === winningNum){
    
        gameOver(true, `${winningNum} is correct, YOU WIN!`);

    } else {
      //Wrong number
      guessesLeft -= 1;

      if(guessesLeft === 0){
          //game over - lost
    
    gameOver(false,`Game Over! you lost. The correct number was ${winningNum}`);

      }else{
          //game continues - answer wrong

          //change border color
        guessInput.style.borderColor = 'red';

        //Clear Input
        guessInput.value = '';
        
        //tell users the answer is wrong
          setMessage(`${guess} is not correct, ${guessesLeft}: guesses left`)
          

        
      }

    }
});

function gameOver(won, msg){
    let color;
    let textColor;
    won === true ? color = 'green' : color === 'green';
    

    //Disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //set text color
    message.style.color = color;
    //set message
    setMessage(msg);

    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//get random number
function getRandomNum(min,max){
    return (Math.floor(Math.random()*(max-min+1)+min));

};
//Set message
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}

