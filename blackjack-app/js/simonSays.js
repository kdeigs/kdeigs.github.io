let currentComputerSequence = [];
let currentPlayerSequence = [];
const startGame = () => {
    $('#start').remove();
    $('#counter').text('3');
    setTimeout(() => {
        $('#counter').text('2');
        setTimeout(() => {
            $('#counter').text('1');
            setTimeout(() => {
                $('#counter').text('');
                createSequence(1);
            }, 1000)
        }, 1000)
    }, 1000)
}

const createSequence = (len) => {
    currentComputerSequence = [];
    for(let i = 0; i < len; i++){
        currentComputerSequence.push(Math.floor(Math.random()*4));
    }
    displaySequence(0);
}

const displaySequence = (currentIndex) => {
    switch(currentComputerSequence[currentIndex]){
        case 0:
            $('#green').css('background-color', 'lightGreen');
            break;
        case 1:
            $('#red').css('background-color', 'pink');
            break;
        case 2:
            $('#yellow').css('background-color', 'lightYellow');
            break;
        case 3:
            $('#blue').css('background-color', 'lightBlue');
            break;
    }

    setTimeout(() => {
        nextSequence(currentIndex);
    }, 1000);
}

const nextSequence = (currentIndex) => {
    resetColors();
    if(currentComputerSequence.length === currentIndex+1){
        playerTurn();
    }else{
        displaySequence(currentIndex++);
    }
}

const playerTurn = () => {
    let currentPlayerSequence = [];
    $('#green').on('click', () => {
        if(currentPlayerSequence.length < currentComputerSequence.length){
            resetColors();
            $('#green').css('background-color', 'lightGreen');
            currentPlayerSequence.push(0);
        }
    });
    $('#red').on('click', () => {
        if(currentPlayerSequence.length < currentComputerSequence.length){
            resetColors();
            $('#red').css('background-color', 'pink');
            currentPlayerSequence.push(1);
        }
    });
    $('#yellow').on('click', () => {
        if(currentPlayerSequence.length < currentComputerSequence.length){
            resetColors();
            $('#yellow').css('background-color', 'lightYellow');
            currentPlayerSequence.push(2);
        }
    });
    $('#blue').on('click', () => {
        if(currentPlayerSequence.length < currentComputerSequence.length){
            resetColors();
            $('#blue').css('background-color', 'lightBlue');
            currentPlayerSequence.push(3);
        }
    });

    while(currentPlayerSequence.length < currentComputerSequence.length){
        setTimeout(() =>{}, 100);
    }

    compareAnswers();
}

const compareAnswers()

const resetColors = () => {
    $('#green').css('background-color', 'green');
    $('#red').css('background-color', 'red');
    $('#yellow').css('background-color', 'yellow');
    $('#blue').css('background-color', 'blue');
}

$(() => {
    $('#start').on('click', startGame);
});