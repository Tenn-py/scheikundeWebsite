import React, { useState } from 'react';
import './pages.css';
import Experimenten from './experimenten/experimenten';
import Modal from 'react-awesome-modal'

function ExperimentPage() {
  const windowWidth = window.innerWidth;
  const [settingbar, setSettingbar] = useState("0vw")
  const [enabled, setEnabled] = useState(false)
  const [visible, setvisible] = useState(false)
  const [filter, setFilter] = useState(null)
  const [Background, setBackground] = useState("linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))")

  function VuurFilter() {
      setFilter("Vuur")
  }

  function WaterFilter() {
    setFilter("Water")
  }

  function KleurVeranderingFilter() {
    setFilter("Kleurverandering")
  }

  function Clear() {
    setFilter(null)
  }

  function openModal() {
      setvisible(true)
  }

  function closeModal() {
      setvisible(false)
  }

  function Dark() {
    setBackground("linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))")
  }

  function Light() {
    setBackground("#c5e3f6")
  }

  return (
      <div className="Appexp" style={{background: Background}}>
        <Experimenten background={Background} filter={filter}/>
        <div className="Uitschuif">
          <button onClick={VuurFilter} className="Marius">Vuur</button>
          <button onClick={WaterFilter} className="Wat">Water</button>
          <button onClick={KleurVeranderingFilter} className="Kleur">Kleur</button>
          <button onClick={Clear} className="Clea">All</button>
        </div>
      </div>

  );
}

export default ExperimentPage;