import React from "react";
import{
    MainHolding,
    Text,
    Monotors,
    Img,
    
} from './CardStyled'




function Holder (props){
    return(
    
        <MainHolding>
                <Text>{props.para}</Text>
                <Monotors>{props.moni}</Monotors>
                <Img src={props.Avater}/>
        </MainHolding>
        
    )
}

export default Holder