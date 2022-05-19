export const generateInitialData = () => {
    const initialData =[
        {
            name:"King of Hearts",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/KH.png'
        },
        {
            name:"Queen of Hearts",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/QH.png'
        },
        {
            name:"Jack of Hearts",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/JH.png'
        },
        {
            name:"Ten of Hearts",
            value: 10,
            url:'data:image/png;base64,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'
        },
        {
            name:"Nine of Hearts",
            value: 9,
            url:'https://deckofcardsapi.com/static/img/9H.png'
        },
        {
            name:"eight of Hearts",
            value: 8,
            url:'https://deckofcardsapi.com/static/img/8H.png'
        },
        {
            name:"Seven of Hearts",
            value: 7,
            url:'https://deckofcardsapi.com/static/img/7H.png'
        },
        {
            name:"Six of Hearts",
            value: 6,
            url:'https://deckofcardsapi.com/static/img/6H.png'
        },
        {
            name:"Five of Hearts",
            value: 5,
            url:'https://deckofcardsapi.com/static/img/5H.png'
        },
        {
            name:"Four of Hearts",
            value: 4,
            url:'https://deckofcardsapi.com/static/img/4H.png'
        },
        {
            name:"Three of Hearts",
            value: 3,
            url:'https://deckofcardsapi.com/static/img/3H.png'
        },
        {
            name:"Two of Hearts",
            value: 2,
            url:'https://deckofcardsapi.com/static/img/2H.png'
        },
        {
            name:"Ace of Hearts",
            value: 1,
            url:'https://deckofcardsapi.com/static/img/AH.png'
        },
        {
            name:"King of Diamonds",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/KD.png'
        },
        {
            name:"Queen of Diamonds",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/QD.png'
        },
        {
            name:"Jack of Diamonds",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/JD.png'
        },
        {
            name:"Ten of Diamonds",
            value: 10,
            url:'data:image/png;base64,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'
        },
        {
            name:"Nine of Diamonds",
            value: 9,
            url:'https://deckofcardsapi.com/static/img/9D.png'
        },
        {
            name:"eight of Diamonds",
            value: 8,
            url:'https://deckofcardsapi.com/static/img/8D.png'
        },
        {
            name:"Seven of Diamonds",
            value: 7,
            url:'https://deckofcardsapi.com/static/img/7D.png'
        },
        {
            name:"Six of Diamonds",
            value: 6,
            url:'https://deckofcardsapi.com/static/img/6D.png'
        },
        {
            name:"Five of Diamonds",
            value: 5,
            url:'https://deckofcardsapi.com/static/img/5D.png'
        },
        {
            name:"Four of Diamonds",
            value: 4,
            url:'https://deckofcardsapi.com/static/img/4D.png'
        },
        {
            name:"Three of Diamonds",
            value: 3,
            url:'https://deckofcardsapi.com/static/img/3D.png'
        },
        {
            name:"Two of Diamonds",
            value: 2,
            url:'https://deckofcardsapi.com/static/img/2D.png'
        },
        {
            name:"Ace of Diamonds",
            value: 1,
            url:'https://deckofcardsapi.com/static/img/AD.png'
        },
        {
            name:"King of Clubs",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/KC.png'
        },
        {
            name:"Queen of Clubs",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/QC.png'
        },
        {
            name:"Jack of Clubs",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/JC.png'
        },
        {
            name:"Ten of Clubs",
            value: 10,
            url:'data:image/png;base64,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'
        },
        {
            name:"Nine of Clubs",
            value: 9,
            url:'https://deckofcardsapi.com/static/img/9C.png'
        },
        {
            name:"eight of Clubs",
            value: 8,
            url:'https://deckofcardsapi.com/static/img/8C.png'
        },
        {
            name:"Seven of Clubs",
            value: 7,
            url:'https://deckofcardsapi.com/static/img/7C.png'
        },
        {
            name:"Six of Clubs",
            value: 6,
            url:'https://deckofcardsapi.com/static/img/6C.png'
        },
        {
            name:"Five of Clubs",
            value: 5,
            url:'https://deckofcardsapi.com/static/img/5C.png'
        },
        {
            name:"Four of Clubs",
            value: 4,
            url:'https://deckofcardsapi.com/static/img/4C.png'
        },
        {
            name:"Three of Clubs",
            value: 3,
            url:'https://deckofcardsapi.com/static/img/3C.png'
        },
        {
            name:"Two of Clubs",
            value: 2,
            url:'https://deckofcardsapi.com/static/img/2C.png'
        },
        {
            name:"Ace of Clubs",
            value: 1,
            url:'https://deckofcardsapi.com/static/img/AC.png'
        },
        {
            name:"King of Spades",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/KS.png'
        },
        {
            name:"Queen of Spades",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/QS.png'
        },
        {
            name:"Jack of Spades",
            value: 10,
            url:'https://deckofcardsapi.com/static/img/JS.png'
        },
        {
            name:"Ten of Spades",
            value: 10,
            url:'data:image/png;base64,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'
        },
        {
            name:"Nine of Spades",
            value: 9,
            url:'https://deckofcardsapi.com/static/img/9S.png'
        },
        {
            name:"eight of Spades",
            value: 8,
            url:'https://deckofcardsapi.com/static/img/8S.png'
        },
        {
            name:"Seven of Spades",
            value: 7,
            url:'https://deckofcardsapi.com/static/img/7S.png'
        },
        {
            name:"Six of Spades",
            value: 6,
            url:'https://deckofcardsapi.com/static/img/6S.png'
        },
        {
            name:"Five of Spades",
            value: 5,
            url:'https://deckofcardsapi.com/static/img/5S.png'
        },
        {
            name:"Four of Spades",
            value: 4,
            url:'https://deckofcardsapi.com/static/img/4S.png'
        },
        {
            name:"Three of Spades",
            value: 3,
            url:'https://deckofcardsapi.com/static/img/3S.png'
        },
        {
            name:"Two of Spades",
            value: 2,
            url:'https://deckofcardsapi.com/static/img/2S.png'
        },
        {
            name:"Ace of Spades",
            value: 1,
            url:'https://deckofcardsapi.com/static/img/AS.png'
        },

    ]
    return initialData
}

export const TYPES ={
    FETCH_DECK :'FETCH_DECK',
    ADD_TO_DEALERS_HAND:'ADD_TO_DEALERS_HAND',
    ADD_TO_PLAYERS_HAND:'ADD_TO_PLAYERS_HAND',
    REMOVE_FROM_DECK:'REMOVE_FROM_DECK',
}

export const fetchPokemonData = (payload) => {
    return {
        type: TYPES.FETCH_DECK,
        payload
    }
}
// data from mock backend request
export const fetchPokemonInitialData = () =>{
    return fetchPokemonData(generateInitialData())
}