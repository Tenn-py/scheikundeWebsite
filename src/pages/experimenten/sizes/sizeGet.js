import React from 'react'

export default class Main extends React.Component {
    constructor(props) {
       super(props);
       this.handleResize = this.handleResize.bind(this)
       this.state = { windowWidth: window.innerWidth };
     }
   
    handleResize = (e) => {
     this.setState({ windowWidth: window.innerWidth });
    };
   
    componentDidMount() {
     window.addEventListener("resize", this.handleResize);
    }
   
    componentWillUnmount() {
     window.addEventListener("resize", this.handleResize);
    } 
   
     render() {
       const { windowWidth } = this.state; 
       return <div>{windowWidth}</div>
     }
   }