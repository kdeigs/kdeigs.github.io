const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let playerBust = false;
let dealerBust = false;

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

    dealerDeal();

    $playerCards.append($cardOne, $cardTwo);
    $buttons.append($hitButton, $stayButton);
}

const dealerDeal = () => {
    let randomCard = cards[Math.floor(Math.random()*12)];
    let $dealerCardOne = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    randomCard = cards[Math.floor(Math.random()*12)];
    let $dealerCardTwo = $('<div>').addClass('cardBack').attr('id', randomCard);
    $('#dealerCards').append($dealerCardOne, $dealerCardTwo);
    while(calculate($('#dealerCards')) < 17){
        randomCard = cards[Math.floor(Math.random()*12)];
        let $dealerCard = $('<div>').addClass('cardBack').attr('id', randomCard);
        $('#dealerCards').append($dealerCard);
    }
    if(calculate($('#dealerCards')) > 21){
        dealerBust = true;
    }
    
}

const hit = () => {
    if(!playerBust){
        let randomCard = cards[Math.floor(Math.random()*12)];
        let $card = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
        $('#playerCards').append($card);
        if(calculate($('#playerCards')) > 21){
            bust();
        }
    }
}

const showDealer = () => {
    console.log($('#dealerCards').children());
    for(let item of ($('#dealerCards').children())){
        $(item).text($(item).attr('id')).removeClass('cardBack').addClass('card');
    }
}

const reset = () => {
    $('#hit').remove();
    $('#stay').remove();

    let $deal = $('<button>').text('Deal').attr('id', 'deal');
    $deal.on('click', () => {
        playerBust = false;
        $('#winner').remove();
        $('.card').remove();
        $('.cardBack').remove();
        deal();
    });
    $('#buttons').append($deal);
}

const bust = () => {
    playerBust = true;
    showDealer();
    showWinner();
    reset();
}

const showWinner = () => {
    let winner = calcWin();
    $winnerCard = $('<h2>').text(`The ${winner} is the winner!`).attr('id', 'winner');
    $('#winnerCard').append($winnerCard);
}

const stay = () => {
    calculate($('#playerCards'));
    showWinner();
    showDealer();
    reset();
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

const calcWin = () => {
    if(dealerBust && !playerBust){
        return 'player';
    }else if (!dealerBust && playerBust){
        return 'dealer'
    }else if(calculate($('#playerCards')) > calculate($('#dealerCards'))){
        return 'player';
    }else{
        return 'dealer'
    }
}
$(() => {
    $('#deal').on('click', deal);
});