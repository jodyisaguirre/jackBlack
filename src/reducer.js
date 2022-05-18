
import {TYPES} from "./actions";

export const initialState ={
    deck: [],
    playersHand:[],
    dealersHand:[]
}




export default function reducer(state={}, action) {
    switch (action.type) {
        case TYPES.FETCH_DECK:
            return {
                ...state,
                deck: action.payload
            }
        case TYPES.ADD_TO_PLAYERS_HAND:
            return {
                ...state,
                playersHand: [...state.playersHand,action.payload]
            }
        case TYPES.ADD_TO_DEALERS_HAND:
            return {
                ...state,
                dealersHand: [...state.dealersHand,action.payload]
            }
        default:
            return state
    }
}