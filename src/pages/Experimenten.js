import React, { useState } from 'react';
import './pages.css';
import Experimenten from './experimenten/experimenten';
import Tabladen from '../components/tabladen';
import Setting from './setting'


function ExperimentPage() {

  const [background, setbackground] = useState("#1a2639")

  return (
    <div>
      <div className="Appexp">
        <Experimenten/>
        <Setting/>
      </div>
    </div>

  );
}

export default ExperimentPage;