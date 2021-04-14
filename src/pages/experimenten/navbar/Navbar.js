import React from 'react'
import './Navbar.css'


class Navbar extends React.Component {
  listener = null;
  state = {
    nav:false
  }


  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }


   componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }


   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }
   }

  render(){
      return (
        <div>
            <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
                <img src='imgleftlink'/>
                <img src='imgrightlink' />
            </div>
        </div>
    );
    }
}
export default Navbar