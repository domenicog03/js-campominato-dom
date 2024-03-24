
const play = document.querySelector('#play-btn');
play.addEventListener('click',function(){

    const numberOfBombs = 16;
const level = document.querySelector('#level').value;
const userMessage = document.querySelector('#user-message');

let numberOfSquares;
let numberOfCellsPerRow;
if(level === 'easy') {
    numberOfSquares = 100;
    numberOfCellsPerRow = 10;
} else if(level === 'hard') {
    numberOfSquares = 81;
    numberOfCellsPerRow = 9;
} else {
    numberOfSquares = 49;
    numberOfCellsPerRow = 7;
}


const numberOfAttempts = numberOfSquares - numberOfBombs;
let points = 0;
let square ="";

const bombs = generateBombsArray(numberOfBombs, 1, numberOfSquares);
    console.log(bombs);

    let isGameOver = false;


    const mainGrid = document.querySelector('#grid');
    mainGrid.innerHTML="";
    userMessage.innerHTML = '';
    for(let i = 1; i <= numberOfSquares; i++) {
                const thisNumber = i;
                 square = generateSquare(i);

                 square.addEventListener('click', function() {
                    if(!isGameOver) {
                        this.style.pointerEvents = 'none';
            

                        if(bombs.includes(thisNumber)) {
                            this.classList.add('bomb');
            

                            userMessage.innerHTML = `Hai perso, il tuo punteggo è ${points}`;
            
                            isGameOver = true;
                        } else {

                            this.classList.add('clicked');
                            points++;
            
                            if(points === numberOfAttempts) {
                                userMessage.innerHTML = `Hai vinto, il tuo punteggo è ${points}`;
                                isGameOver = true;
                            }
                        }
                    }
                });
    
        mainGrid.append(square);
    }



})



    
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.innerHTML = `<span>${number}</span>`;
        newSquare.addEventListener('click', function() {

           alert(number);

        });
        return newSquare;
    }

    function generateBombsArray(arrayLength, rangeMin, rangeMax) {
        let randomArray = [];
    

        while(randomArray.length < arrayLength) {
            const randomNumber = getRndInteger(rangeMin, rangeMax);
    
            if(!randomArray.includes(randomNumber)) {
                randomArray.push(randomNumber);
            }
        }
    
        return randomArray;
    }


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }