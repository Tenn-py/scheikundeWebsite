import React, { useEffect, useState } from 'react';
import Ex1 from './Ex1';
import Navbar from './navbar/Navbar'
import Modal from 'react-awesome-modal'
import { waitFor } from '@testing-library/dom';

function Experimenten() {

    const experimenten = require('./experimenten.json')
    let personen = []
    console.log(experimenten)
    var i;
    let titels = []
    let [proef, setproef] = useState(0)
    let benodigheden = []

    
    const [visible, setvisible] = useState(false)

    function openModal() {
        setvisible(true)
    }

    function closeModal() {
        setvisible(false)
    }

    for (i in experimenten) {
        personen.push(experimenten[i].titel)
    }

    function ExpOpen(what) {
        console.log(what)
        const index = titels.indexOf(what)
        console.log(index)
        setproef(index)
        openModal()
    }


    function Exps() {
        return personen.map((personen) => <div><button className="Experiment" onClick={() => {{ ExpOpen(personen)}}}>{personen}</button></div>   ) 
    }

    function benodighedenEx() {
        
    }

    return (

        

        <div className="Experimenten">
            {Exps()}
            <Modal visible={visible} width="1000" height="700" effect="fadeInDown" onClickAway={() => closeModal()}>
                    <div>
                        {benodighedenEx()}
                        <button className="Close" href="javascript:void(0);" onClick={() => closeModal()}>Sluiten</button>
                    </div>
            </Modal>
        </div>
    )
}

export default Experimenten;