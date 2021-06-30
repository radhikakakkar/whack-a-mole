const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
var score = document.querySelector('#score');
const timeleft = document.querySelector('#time-left');
var added = document.querySelector('#added');

var result = 0;
var hitpos;
var currentTime = 60;
var timerId = null;


function increase(){
    result = result+1;
    score.innerHTML = result;
    hitpos = null;
}

function countDown(){

    if(currentTime > 0){
        currentTime--;
        timeleft.innerHTML = currentTime;

    }
    
    
    if(currentTime == 0){
            clearInterval('countDownTimerId');
            clearInterval('timerId');
            added.textContent= null;
            added2.textContent= null;
            result = 0;
            score= null;
             
            if(confirm('GAME OVER, your score is : ' + result + ' Do you wanna play again'))
            {   
                result = 0;
                score = null;
                currentTime = 60;
                added.textContent= null;
                added2.textContent= null;
                location.reload();
            } 

             else{
                clearInterval('countDownTimerId');
                clearInterval('timerId');
                alert ('close the tab');
                
             }
    }

}

function removeMole(){
    square.forEach(square => {
        square.classList.remove('mole');
    });

}

function moveMole(){
    timerId = setInterval(randomSquare, 500);
    
}


function randomSquare(){

    removeMole();

    let randomSquare = square[Math.floor(Math.random() * 9)];
    
        randomSquare.classList.add('mole');

        hitpos = randomSquare.id;
        
     
}




square.forEach(id => {
   
    id.addEventListener('mouseup', () =>
    {
        if (id.id == hitpos){
            added.textContent = "you scored a point";
            added2.textContent = null;
            increase();
        }
        else{
            added2.textContent = "you missed a point";
            added.textContent = null;
        }
    });
});



moveMole();

let countDownTimerId = setInterval(countDown, 1000);