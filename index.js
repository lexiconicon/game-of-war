/* 
Your task is to create an automated version of the card game WAR. 
There are two players. Nothing special for a tie in a round
Consider classes for Card, Deck, Player as well as properties and methods they include

The completed game should:
1. Deal 26 Cards to each Player from a Deck of 52 cards.
2. Iterate through the turns where each Player plays a Card.
3. The Player who played the higher card is awarded a point.
    - Ties result in zero points for both Players.
4. After all cards have been played, display the score and declare the winner.
*/



class Deck {
    constructor() {
        this.deck = []; //array to store cards
        this.faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']; //array to hold the faces
        this.suits = ['Spades 🗡️', 'Hearts ❤️', 'Diamonds 💎', 'Clubs 🍀']; //array to hold the suits
    }
    createDeck() { // method to create a deck that combines every face value with a suit
        for (let i = 0; i < this.suits.length; i++) { //loop so that each card is given a suit
            for (let j = 0; j < this.faces.length; j++) { // loop so each card is given a face
                let card = { //creates card objects with a name and value
                    name: `${this.faces[j]} of ${this.suits[i]}}`,
                    value: j + 1
                }
                this.deck.push(card); //adds cards to the deck
            }
            
        }
    }
    //shuffling using Fisher-Yates method. used internet for help with this
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) { // loops through the deck by starting at the end
            const j = Math.floor(Math.random() * (i + 1)); //generates a random index from the remaining unshuffled cards
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; //swaps the card at index i with the card at index j
        }
    }
}


class War { //method to play the actual game 
    constructor() {
        this.player1 = { //creates objects for player 1 and player 2 with array for their cards
            pName: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            pName: 'Player 2',
            score: 0,
            hand: []
        }
    }

    playGame() { //method for game logic
        const deck = new Deck
        deck.createDeck() //calls the create deck method
        deck.shuffleDeck() //calls the shuffle deck method

        while (deck.deck.length !== 0) { //as long as there are cards still in the deck, they will be dealt to players
            this.player1.hand.push(deck.deck.shift()) //pushes 26 cards to players' hands
            this.player2.hand.push(deck.deck.shift())
        }
        for (let i = 0; i < this.player1.hand.length; i++) { //loop to award points based on comparison of card values each turn
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++;
                console.log(`P1 card: ${this.player1.hand[i].name}
                    P2: ${this.player2.hand[i].name}
                    Player 1 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}`)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++;
                console.log(`P1 card: ${this.player1.hand[i].name}
                    P2: ${this.player2.hand[i].name}
                    Player 2 wins a point!
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}`)
            } else { //this is for a tie
                console.log(`P1 card: ${this.player1.hand[i].name}
                    P2: ${this.player2.hand[i].name}
                    Tie: No points awarded.
                    Current Score: P1: ${this.player1.score}, P2: ${this.player2.score}`)
            }
        }
        if (this.player1.score > this.player2.score) { //conditional at the end of the loop to say who won
            console.log(`Player 1 wins!
                Final Score:
                P1: ${this.player1.score}
                P2: ${this.player2.score}`);
        } else if (this.player1.score > this.player2.score) { 
            console.log(`Player 2 wins!
                Final Score:
                P1: ${this.player1.score}
                P2: ${this.player2.score}`);
        } else {
            console.log(`Tie game! 
                Final Score:
                P1: ${this.player1.score}
                P2: ${this.player2.score}`);
        }
    }
}

const game = new War; //creates a new instance of the game
game.playGame(); //calls the method

