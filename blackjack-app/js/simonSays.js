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
    currentComputerSequence = []
    for(let i = 0; i < len; i++){
        currentComputerSequence.push((Math.floor(Math.random()*4)));
    }
    displaySequence(0);
}

const displaySequence = (currentIndex) => {
    console.log(currentComputerSequence);
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
        currentPlayerSequence = [];
        playerTurn();
    }else{
        displaySequence(currentIndex++);
    }
}

const playerTurn = () => {
    $('#green').off();
    $('#red').off();
    $('#yellow').off();
    $('#blue').off();
    $('#green').on('click', () => {
        resetColors();
        $('#green').css('background-color', 'lightGreen');
        currentPlayerSequence.push(0);
        console.log(0);
        if(currentPlayerSequence.length === currentComputerSequence.length){
            setTimeout(compareAnswers, 1000);
        }
    });
    $('#red').on('click', () => {
        resetColors();
        $('#red').css('background-color', 'pink');
        currentPlayerSequence.push(1);
        console.log(1);
        if(currentPlayerSequence.length === currentComputerSequence.length){
            setTimeout(compareAnswers, 1000);
        }
    });
    $('#yellow').on('click', () => {
        resetColors();
        $('#yellow').css('background-color', 'lightYellow');
        currentPlayerSequence.push(2);
        console.log(2);
        if(currentPlayerSequence.length === currentComputerSequence.length){
            setTimeout(compareAnswers, 1000);
        }
    });
    $('#blue').on('click', () => {
        resetColors();
        $('#blue').css('background-color', 'lightBlue');
        currentPlayerSequence.push(3);
        console.log(3);
        if(currentPlayerSequence.length === currentComputerSequence.length){
            setTimeout(compareAnswers, 1000);
        }
    });
}

const compareAnswers = () => {
    console.log(currentPlayerSequence);
    resetColors();
    let won = true;
    for(let i = 0; i < currentPlayerSequence.length; i++){
        if(currentPlayerSequence[i] != currentComputerSequence[i]){
            won = false;
        }
    }
    if(won){
        $('#counter').text('Correct!');
        setTimeout(() => {
            $('#counter').text('3');
            setTimeout(() => {
                $('#counter').text('2');
                setTimeout(() => {
                    $('#counter').text('1');
                    setTimeout(() => {
                        $('#counter').text('');
                        createSequence(currentPlayerSequence.length++);
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }else{
        $('#counter').text('Sorry you were incorrect!');
        const $playAgain = $('<button>').text('Play Again').on('click', startGame).attr('id', 'start');
        $('#container').append($playAgain);
    }
}

const resetColors = () => {
    $('#green').css('background-color', 'green');
    $('#red').css('background-color', 'red');
    $('#yellow').css('background-color', 'yellow');
    $('#blue').css('background-color', 'blue');
}

$(() => {
    $('#start').on('click', startGame);
});