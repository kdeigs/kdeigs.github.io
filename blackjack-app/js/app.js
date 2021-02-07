const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let bust = false;

const deal = () => {
    let $playerCards = $('#playerCards');
    let $buttons = $('#buttons')
    $('#deal').remove();
    let $hitButton = $('<button>').text('Hit').attr('id', 'hit');
    $hitButton.on('click', hit);
    let $stayButton = $('<button>').text('Stay').attr('id', 'stay');
    let randomCard = cards[Math.floor(Math.random()*12)];
    let $cardOne = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    randomCard = cards[Math.floor(Math.random()*12)];
    let $cardTwo = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    $playerCards.append($cardOne, $cardTwo);
    $buttons.append($hitButton, $stayButton);
}

const hit = () => {
    if(!bust){
        let randomCard = cards[Math.floor(Math.random()*12)];
        let $card = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
        $('#playerCards').append($card);
        calculate();
    }
}

const calculate = () => {
    $cardDivs = $('.card');
    let max = 0;
    let min = 0;
    let actualScore = 0;
    for(let item of $cardDivs){
        let itemId = $(item).attr('id');
        if(itemId === 'K' || itemId === 'Q' || itemId === 'J'){
            max += 10;
            min += 10;
        }else if (itemId === 'A'){
            max += 11;
            min += 1;
        }else{
            max += itemId;
            min += itemId;
        }
    }
    if(max <= 21){
        return max;
    }else{
        return min;
    }
}

$(() => {
    $('#deal').on('click', deal);
});