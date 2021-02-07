const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const deal = () => {
    let $playerCards = $('#playerCards');
    let $buttons = $('#buttons')
    $('#deal').remove();
    let $hitButton = $('<button>').text('Hit').attr('id', 'hit');
    let $stayButton = $('<button>').text('Stay').attr('id', 'stay');
    let randomCard = cards[Math.floor(Math.random()*12)];
    let $cardOne = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    randomCard = cards[Math.floor(Math.random()*12)];
    let $cardTwo = $('<div>').text(randomCard).addClass('card').attr('id', randomCard);
    $playerCards.append($cardOne, $cardTwo);
    $buttons.append($hitButton, $stayButton);
}

$(() => {
    $('#deal').on('click', deal);
});