import React from 'react'
import "./Ex.css"

export default function Nakijken(props, proef) {

    const experimenten = require("./experimenten.json")
    var VragenListNeed = []
    const inputs = []

    function Vragen() {
        const Vragen = experimenten[props.proef].Vragen
        VragenListNeed = Vragen.split("-")
        const VragenList = Vragen.split("-")
        return VragenList.map((Vragen) => <li style={{color: "white", marginBottom: "1vh", height: "3vh"}}>{Vragen}</li>)    
    }

    function Inputs() {
        return VragenListNeed.map((Vragen) => <input type="text" className="Input" />)
    }


    return(
        <div>
            <div className="AllVragen">
                {Vragen()}            
            </div>
            <div className="AllInputs">
                {Inputs()}
            </div>            
        </div>

    )
}