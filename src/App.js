import logo from './logo.svg';
import './App.css';
import React, {Fragment, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonInitialData, TYPES} from "./actions";
import {tab} from "@testing-library/user-event/dist/tab";
import PlayersHand from "./components/PlayersHand";
import DealersHand from "./components/DealersHand";


function App() {
    const [dealersTurn, setDealersTurn] = useState(true)
    const [tableDeck, setTableDeck] = useState([])
    const [loading, setLoading] = useState(false)
    const [stand, setStand] = useState(false)
    const [winner, setWinner] = useState(false)
    const [busted, setBusted] = useState(false)
    const [dealerWinner, setDealerWinner] = useState(false)
    const [dealerBusted, setDealerBusted] = useState(false)
    const [playerStay, setPlayerStay] = useState(0)
    const [number, setNumber] = useState(0)
    const deck = useSelector((state) => state.deck)
    const playersHand = useSelector((state) => state.playersHand)
    const dealersHand = useSelector((state) => state.dealersHand)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchPokemonInitialData())
    },[])

    useEffect(() => {
        setLoading(true)
        const shuffled = deck
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        setTableDeck(shuffled)
        setLoading(false)
    },[deck])

    useEffect(() => {
        if(winner === true){
            alert(number +" winner")
        }
        else if(busted === true){
            alert(number+ " busted")
        }
        else if(dealerWinner === true){
            alert(number +" Dealer winner")
        }
        else if(dealerBusted === true){
            alert(number+ " Dealer busted")
        }
    },[busted,dealerBusted,winner,dealerWinner])

    useEffect(() => {
                let count = 0
                for (let i = 0; i < playersHand.length; i++) {
                        count += playersHand[i].value
                    if(count > 21){
                        setNumber(count)
                        setBusted(true)
                    }
                    else if(count === 21){
                        setNumber(count)
                        setWinner(true)
                    }
                    else{
                        setPlayerStay(count)
                    }
                }
    }, [playersHand])


    function addToDealersHand(){
        dispatch({
            type: TYPES.ADD_TO_DEALERS_HAND,
            payload: tableDeck[0]
        })
        tableDeck.splice(0,1)
    }
    function addToPlayersHand(){
        dispatch({
            type: TYPES.ADD_TO_PLAYERS_HAND,
            payload: tableDeck[0]
        })
        tableDeck.splice(0,1)
    }


    function startOnClickHandler(){
        setLoading(true)
        let i = 0
        while (i < 2) {
            addToDealersHand()
            addToPlayersHand()
            i++;
        }
        setLoading(false)

    }
    function playerOnClickHandler(){
        addToPlayersHand()
    }

    function standOnClickHandler(){
        setStand(true)
        let count = 0
        for (let i = 0; i < dealersHand.length; i++) {
            count += dealersHand[i].value
            if(count < 16 ){
               console.log('less')
                addToDealersHand()
                }
            else{
                console.log('done')
            }
        }
        //     else if(21 < count && count >17){
        //         if(playerStay> count){
        //             setWinner(true)
        //         }
        //     }
        //     else if(count > 21){
        //         setDealerBusted(true)
        //     }
        //     else if(count === 21){
        //         setNumber(count)
        //         setDealerWinner(true)
        //     }
        // }
    }

    return (
    <div className="App">
      <div className="table">
          <div className="dealer">
              <DealersHand
                  stand={stand}
                  dealerWinner={dealerWinner}
                  busted={busted}
              />
          </div>
          {((dealersHand.length === 0))&&
              <button className={"button"} onClick={startOnClickHandler} disabled={(dealersHand.length >0)}>START</button>
          }
          {(playersHand.length > 0) &&
              <span>
                  <button className={"button"} onClick={playerOnClickHandler} disabled={(playersHand.length === 0)}>HIT
                      ME
                  </button>
                  <button className={"button"} onClick={standOnClickHandler}
                          disabled={(playersHand.length === 0)}>STAND
                  </button>
              </span>
          }
          <div className="player">
              <PlayersHand/>
          </div>
      </div>
    </div>
  );
}

export default App;
