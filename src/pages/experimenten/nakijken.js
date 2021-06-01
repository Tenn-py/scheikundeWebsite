import React, {useState} from 'react'
import "./Ex.css"

export default function Nakijken(props, proef) {

    const experimenten = require("./Experimenten 2.0.json")
    var VragenListNeed = []
    var inputs = []
    const [input, setinput] = useState("")

    function Vragen() {
        const Vragen = experimenten[props.proef].Vragen
        VragenListNeed = Vragen.split("-")
        const VragenList = Vragen.split("-")
        return VragenList.map((Vragen) => <div><li style={{color: "white", marginBottom: "1vh", width: "20vw"}}>{Vragen}</li><input onChange={Print} type="text" className="Input" /></div>)    
    }

    function Print(e) {
        console.log(e.target.value)
        setinput(e.target.value)
    }

    function Check() {
        const answersList = experimenten[props.proef].antwoorden.split("-")
        return answersList.map((ant) => <p>{ant}</p>)
    }


    return(
        <div className="AllVragen">
            <h1>antwoorden</h1>
            {Check()}
        </div>
    )
}