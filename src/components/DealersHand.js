import React, { Fragment} from "react"
import { useSelector} from "react-redux";



export default function DealersHand(props){
    const { stand, dealerWinner, busted } = props
    const dealersHand = useSelector((state) => state.dealersHand)

    return(
        <Fragment>
            <img   src={dealersHand[0]?.url}/>
            <img  style={(stand || dealerWinner || busted)?{opacity:'100%'}: {opacity:'0'}} src={dealersHand[1]?.url}/>
        </Fragment>
    )
}