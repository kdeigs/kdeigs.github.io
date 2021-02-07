const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let bust = false;

const deal = () => { //Deals Cards to Player and Dealer
    let $playerCards = $('#playerCards');
    let $buttons = $('#buttons')
    $('#deal').remove();

    let $hitButton = $('<button>').text('Hit').attr('id', 'hit');
    $hitButton.on('click', hit);
    let $stayButton = $('<button>').text('Stay').attr('id', 'stay');
    $stayButton.on('click', stay);

    let randomCard = cards[Math.floor(Math.random()*12)];
    let $cardOne = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    randomCard = cards[Math.floor(Math.random()*12)];
    let $cardTwo = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    randomCard = cards[Math.floor(Math.random()*12)];

    let $dealerCardOne = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    randomCard = cards[Math.floor(Math.random()*12)];
    let $dealerCardTwo = $('<div>').addClass('cardBack').attr('id', randomCard);

    $('#dealerCards').append($dealerCardOne, $dealerCardTwo);

    $playerCards.append($cardOne, $cardTwo);
    $buttons.append($hitButton, $stayButton);
}

const hit = () => {
    if(!bust){
        let randomCard = cards[Math.floor(Math.random()*12)];
        let $card = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
        $('#playerCards').append($card);
        calculate($('#playerCards'));
    }
}

const stay = () => {
    calculate($('#playerCards'));
}

const calculate = (cardStack) => {
    $cardDivs = cardStack.children()
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
            max += parseInt(itemId);
            min += parseInt(itemId);
        }
    }
    console.log(`Min: ${min} Max: ${max}`);
    if(max <= 21){
        return max;
    }else{
        return min;
    }
}

$(() => {
    $('#deal').on('click', deal);
});