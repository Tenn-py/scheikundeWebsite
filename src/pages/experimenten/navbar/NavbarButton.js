import React, {useState} from 'react'
import './Navbar.css'

export default function NavbarButton() {
    const [isSchuif, setIsSchuif] = useState("0vh")
    const [isButton, setIsButton] = useState("0vh")

    function UitSchuif() {
        if (isSchuif == "100vh") {
            setIsSchuif("0vh")
        } else if (isSchuif == "0vh") {
            setIsSchuif("100vh")
        }

        if (isButton == "100vh") {
            setIsButton("0vh")
        } else if (isButton == "0vh") {
            setIsButton("100vh")
        }
    }

    return(
        <div className="all">
            <div className="Uitschuif">
                <button className="Marius"></button>
                <button className="Wat"></button>
                <button className="Kleur"></button>
                <button className="Clea"></button>
            </div>
        </div>

    )
}