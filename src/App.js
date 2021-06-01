import React from 'react';
import Experimenten from './pages/Experimenten';
import Home from './pages/Home'
import './App.css';

export default class LoginControl extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
  
      this.state = [{isLoggedIn: false}, {value: ''}, {inputVis: true}];
    }
  
    handleChangeEmail(event) {
      this.setState({value: event.target.value});
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      let home;
      if (isLoggedIn) {
        button = '';
        home = <Experimenten />
      } else {
        button = <button className="Loginout" onClick={this.handleLoginClick} >Ga naar de experimenteren</button>;
        home = <Home />
      }
  
      return (
        <div>
          {button}
          {home}
        </div>
      );
    }
  }