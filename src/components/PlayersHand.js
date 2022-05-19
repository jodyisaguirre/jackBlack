import React, { Fragment} from "react"
import { useSelector} from "react-redux";



export default function PlayersHand(){
    const playersHand = useSelector((state) => state.playersHand)

    return(
        <Fragment>
            {(playersHand?.length >0)&&
                playersHand?.map((card, index) => <img key={card?.name + index} src={card?.url}/>)
            }
        </Fragment>
    )
}