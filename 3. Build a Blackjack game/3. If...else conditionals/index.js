let firstCard = 6
let secondCard = 16
let sum = firstCard + secondCard

if (sum < 21){
    console.log('do you want to draw a new card?')
} else if(sum === 21){
    console.log('blackjack')
} else {
    console.log('looose')
}