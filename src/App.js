import React from "react";
import supervisor from './component/image/icon-supervisor.svg';
import Team from './component/image/icon-team-builder.svg';
import Karma from './component/image/icon-karma.svg'
import Calculator from './component/image/icon-calculator.svg' 
import Card from './component/card';
import Holder from './component/Holder';
import Act from './component/Act';
import Calculate from "./component/Calculate";


function App (){
    return(
        <>
        <Card para="Supervisor" 
        moni="Monitor activities to identify
        project roadblock" 
        Avater={supervisor}/>

        <Holder para="Team Builder"
        moni="Scans our talent network to create the optimal team
        for your project"
        Avater={Team}/>

        <Act para="Karma"
        moni="Regularly evaluates our talent to ensure quality"
        Avater={Karma}/>

        <Calculate para="Calculator"
        moni="Regularly evaluates our talent to ensure quality"
        Avater={Calculator}/>

        </>
    )
}
export default App