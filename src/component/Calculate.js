import React from "react";
import{
    CalcHolding,
    Text,
    Monotors,
    Img,
    
} from './CardStyled'




function Calculate (props){
    return(

        <CalcHolding>
        <Text>{props.para}</Text>
        <Monotors>{props.moni}</Monotors>
        <Img src={props.Avater}/>
        </CalcHolding>  

    )
}

export default Calculate