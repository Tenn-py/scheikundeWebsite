import React, { useState } from 'react';
import Modal from 'react-awesome-modal'
import Nakijken from './nakijken'
import './Ex.css'
import Src from './download.jpg'
import Invis from './Invisibility-Cloak.jpg'
import Cent from './unnamed.jpg'
import Bon from './download (1).jpg'
import Stuiterbal from './Stuiterbal.jpg'
import Schuim from './fotos/Capture.JPG'
import MagischeRozijnen from './fotos/dansenderozijnen.jpg'
import Bonnetje from './fotos/boonnetje.jpg'

function Experimenten(props, filter, background) {

    const experimenten = require('./Experimenten 2.0.json')
    let person = []
    var i;
    var elim;
    let titels = []
    const [proef, setproef] = useState(0)
    let images = [Schuim, MagischeRozijnen, Cent, Bonnetje, Stuiterbal]
    var AllFilters = []
    const filters = []
    const Vuur = []
    const Water = []
    const KleurVerandering = []
    var f
    const [text, settext] = useState("white")
    const [handin, setHandin] = useState(false)
    const [visible, setvisible] = useState(false)

    function openModal() {
        setvisible(true)
    }

    function closeModal() {
        setvisible(false)
    }

    function Image(f) {
        let im;
        let ima;

        im = titels.indexOf(f)
        ima = images[im]

        return ima
    }

    for (i in experimenten) {
        person.push(experimenten[i].titel)
        titels.push(experimenten[i].titel)
    }

    function ExpOpen(what) {
        console.log(what)
        const index = titels.indexOf(what)
        console.log(index)
        setproef(index)
        openModal()
    }


    function Exps() {
        if (props.filter == "Vuur") {
            return Vuur.map((pers) => <div><button className="Experiment" onClick={() => ExpOpen(person[pers])} ><img alt="" src={Image(person)} style={{height: "15vh", width: "20vw", minWidth: "200px", border: "1px solid white"}} />{person[pers]}</button></div>)
        } else if (props.filter == "Water") {
            return Water.map((pers) => <div><button onClick={() => ExpOpen(person[pers])} className="Experiment"><img alt="" src={Image(person)} style={{height: "15vh", width: "20vw", minWidth: "200px", border: "1px solid white"}} />{person[pers]}</button></div>)
        } else if (props.filter == "Kleurverandering") {
            return KleurVerandering.map((pers) => <div><button onClick={() => ExpOpen(person[pers])} className="Experiment"><img alt="" src={Image(person)} style={{height: "15vh", width: "20vw", minWidth: "200px", border: "1px solid white"}} />{person[pers]}</button></div>)
        } else if (props.filter == null) {
            return person.map((person) => <div><button onClick={() => ExpOpen(person)} className="Experiment"><img alt="" src={Image(person)} style={{height: "15vh", width: "15vw", minWidth: "200px", border: "1px solid white"}} />{person}</button></div>)
        }

    }

    function TitelEx() {
        return <h1 style={{color: text}} className="Titel">{experimenten[proef].titel}</h1> 

    }

    function BenodighedenEx() {
        const benodigheden = experimenten[proef].benodigheden
        const benodighedenList = benodigheden.split("-")
        return benodighedenList.map((benodigheden) => <li style={{color: text}} className="Lijst">{benodigheden}</li>)
    }

    function Stappen() {
        const Stappen = experimenten[proef]['methode van onderzoek']
        const StappenList = Stappen.split("-")
        return StappenList.map((stappen) => <li style={{color: text}}>{stappen}</li>)
    }

    function OnderTitel() {
        return <h3 style={{color: text, width: "90vw"}} className="Ondertitel">{experimenten[proef].Ondertitel}</h3>
    }

    function Vragen() {
        const Vragen = experimenten[proef].Vragen
        const VragenList = Vragen.split("-")
        return VragenList.map((Vragen) => <li style={{color: text}}>{Vragen}</li>)
    }

    function Filter() {
;

        for (i in experimenten) {
            filters.push(experimenten[i].Filter)
        }

        for (f = 0; f<filters.length; f++) {
            if (filters[f] == "Vuur") {
                Vuur.push(f)
            } else if (filters[f] == "Water") {
                Water.push(f)
            } else if (filters[f] == "Kleurverandering") {
                KleurVerandering.push(f)
            }
        }

        return <h1 className="AllFilters">{AllFilters}</h1>

    }

    function Handin() {
        if (handin) {
            setHandin(false)
        } else if (!handin) {
            setHandin(true)
        }
    }

    function but() {
        if (experimenten[proef].antwoorden !== "") {
            return <button onClick={Handin} className="CloseExp" style={{left: "40vw", top: "20vh"}}>nakijken</button>
        } else {
            return ""
        }
    }
 

    return (
        <div className="Experimenten">
            {Filter()}
            {Exps()}
            <Modal className="ProefBack" visible={visible} width="100%" height="100%" effect="fadeInDown" onClickAway={() => closeModal()}>
                <div style={{background: props.background}} className="ProefBack">
                    <div className="Proefcontainer">
                            {TitelEx()}
                            {OnderTitel()}
                        <div className="LijstLijst">
                            <div className="BenodighedenBox">
                                <h3 style={{color: text}} className="Benodigheden">benodigheden</h3>
                                {BenodighedenEx()}
                            </div>
                            <div className="StappenBox">
                                <h3 style={{color: text}} className="Stappen">Stappen</h3>
                                {Stappen()}
                            </div>
                            <div className="VragenBox">
                                <h3 style={{color: text}}>Vragen</h3>
                                {Vragen()}
                            </div>
                        </div>
                        <button className="CloseExp" style={{left: "40vw", top: "45vh"}} href="javascript:void(0);" onClick={() => closeModal()}>Sluiten</button>
                        {but()}
                        {/*<button onClick={Handin} className="CloseExp" style={{left: "40vw", top: "20vh"}}>nakijken</button>*/}
                        <Modal className="ProefBack" visible={handin} width="100%" height="100%" effect="fadeInDown" onClickAway={() => closeModal()}>
                            <div className="ProefBack" style={{background: props.background, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                                <Nakijken proef={proef} />
                                <button className="Sluiten" onClick={Handin}>Sluiten</button>
                            </div>
                        </Modal>
                    </div>                
                </div>

            </Modal>
            
        </div>
    )
}

export default Experimenten;