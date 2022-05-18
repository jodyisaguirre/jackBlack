import React, { Fragment} from "react"
import { useSelector} from "react-redux";



export default function PlayersHand(){
    const playersHand = useSelector((state) => state.playersHand)

    return(
        <Fragment>
            {(playersHand?.length >0)&&
                playersHand?.map(card => <img key={card?.value} src={card?.url}/>)
            }
        </Fragment>
    )
}