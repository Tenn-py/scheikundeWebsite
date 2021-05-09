import React, {useEffect, useState} from 'react';
import Settings from './settings.jpg'
import './pages.css'
import Modal from 'react-awesome-modal'
import Text from './Text'

export default function Setting() {

    const [visible, setvisible] = useState(false)
    const [filter, setFilter] = useState("")

    function VuurFilter() {
        setFilter("Vuur")
    }

    function openModal() {
        setvisible(true)
    }

    function closeModal() {
        setvisible(false)
    }

    return (
        <div className="SettingsBar">
            <h1 className="Proefjes">
                proefjes
            </h1>
            <button className="Mariusisdik">
                Vuur
            </button>
            <button className="Water">
                Water
            </button>
            <button className="KleurVerandering">
                Kleur verandering
            </button>
            <button className="SettingsButton" onClick={() => {openModal()}}>
                <img className="SettingsImg" src={Settings} alt="" />                
            </button>
            <Modal visible={visible} width="400" height="300" effect="fadeInLeft" onClickAway={() => closeModal()}>
                    <div>
                        <Text />
                        <button className="Close" href="javascript:void(0);" onClick={() => closeModal()}>Close</button>
                    </div>
            </Modal>
        </div>
    )
}