import React from "react";
import{
    ConHolding,
    Text,
    Monotors,
    Img,
    
} from './CardStyled'




function Act (props){
    return(

        <ConHolding>
        <Text>{props.para}</Text>
        <Monotors>{props.moni}</Monotors>
        <Img src={props.Avater}/>
        </ConHolding>  

    )
}

export default Act