let currentWins = localStorage.getItem('blackjackWins');
if(currentWins == null){
    currentWins = 0;
    console.log('Making new Profile');
    localStorage.setItem('blackjackWins', currentWins);
}else{
    console.log('Profile Already Exists');
}

$( () => {
    $('.popoutButton').hide();
    $('.navItem').on('mouseenter', (e) =>{
    });
    $('.navItem').on('mouseleave', (e) =>{
    });
});