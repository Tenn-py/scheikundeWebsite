import React from 'react';
import './Ex.css'

function Ex1() {
    
    //hier plak je een youtube link van het filmpje over het proefje
    const YTlink = "https://www.youtube.com/watch?v=LtSHSE7vevY&list=PLfjhVebpNAP6kDH7hQdXjuygFCMLXLhHv&index=12"

    return (
        <div className="Experiment">
            <h3>Experimenten Titel</h3>
            <h4>benodigheden</h4>
            <p>zet hier de benodigheden neer</p>
            <h4>methode van onderzoek</h4>
            <p>dit is de omschrijving van het experiment</p>
            <p>{YTlink}</p>
        </div>
    );
}

export default Ex1;