let player = {
    name: "player",
    chips: 489
}
let sum = 0
let totalcards = []
let message = document.getElementById('mm')
let sums = document.getElementById('sum')
let cards = document.getElementById('card')
let blackjack = false
let playerel = document.getElementById('player')

playerel.textContent = player.name + ": $" + player.chips

//cards.textContent = "Cards: " 
//for (i = 0; i < totalcards.length; i += 1){
  //  cards.textContent += " " + totalcards[i] + ", "
//}


function start() {
    let firstCard = rand()
    let secondCard = rand()
    let isAlive = false
    totalcards = [firstCard, secondCard]
    sum = firstCard + secondCard
    game()
}

function game() {
    cards.textContent = "Cards: "
    for (let i = 0; i < totalcards.length; i++) {
        cards.textContent += totalcards[i] + ", "
    }
    if (sum < 21) {
    message.textContent = "Do you want to draw another card?"
    sums.textContent = "Sum: " + sum
} else if (sum === 21) {
   message.textContent = "You've got Blackjack! You earned 100 chips"
   player.chips += 100
   sums.textContent = "Sum: " + sum
   blackjack = true
   playerel.textContent = player.name + ": $" + player.chips
} else {
   message.textContent = "You're out of the game! You lose 100 chips"
   sums.textContent = "Sum: " + sum
    isAlive = true
    player.chips -= 100
    playerel.textContent = player.name + ": $" + player.chips
}
}
function rand(){
    random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        random = 11
    } else if (random > 10) {
        random = 10
    } else {
        random = random
    }
    return random
}

function news() {
    if (sum === 21) {
        message.textContent = "Can't take a new card, you have BLACKJACK. Start a new game"
    } else if (sum > 21) {
        message.textContent = "Can't take a new card, you are out of the game. Start a new game"
    }else {
        let cardd = rand()
        sum += cardd
         totalcards.push(cardd)
         //cards.textContent += totalcards[2]
        game()
    }
}
console.log(message)