console
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
    let currentSequence = [];
    for(let i = 0; i < len; i++){
        currentSequence.push(Math.floor(Math.random()*4));
    }
    displaySequence(0, currentSequence);
}

const displaySequence = (currentIndex, seqArray) => {
    switch(seqArray[currentIndex]){
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

    setTimeout(nextSequence(currentIndex, seqArray), 1000);
}

const nextSequence = (currentIndex, seqArray) => {
    $('#green').css('background-color', 'green');
    $('#red').css('background-color', 'red');
    $('#yellow').css('background-color', 'yellow');
    $('#blue').css('background-color', 'blue');
    if(seqArray.length === currentIndex+1){
        console.log('hello');
    }else{
        displaySequence(currentIndex++, seqArray);
    }
}

$(() => {
    $('#start').on('click', startGame);
});