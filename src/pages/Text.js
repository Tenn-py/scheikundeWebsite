import React from 'react';
import './pages.css'

export default function Text() {
    return(
        <div className="TextContainer">
            <h1>Instellingen</h1>

            <button className="Dark">
                dark
            </button>
            <button className="Light">
                light
            </button>
        </div>

    )
}