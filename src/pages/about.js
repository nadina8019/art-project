import React, { Component } from 'react';
import Header from '../components/Header/Header/Header';
import Hamburger from '../components/Header/Hamburger/Hamburger';
import Backdrop from '../components/Header/Backdrop/Backdrop';
import QuoteBlock from '../components/QuoteBlock/QuoteBlock';
import AboutContent from '../components/AboutContent/AboutContent';
import  Footer from '../components/Footer/Footer';


import '../App.scss';


class About extends Component {
  state = {
    hamburgerOpen: false,
  };

  hamToggleClickHandler = () => {
    this.setState((prevState) => {
      return {hamburgerOpen: !prevState.hamburgerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({ hamburgerOpen: false })
  };

  render() { 
    let hamburger;
    let backdrop;

    if (this.state.hamburgerOpen) {
      hamburger = <Hamburger />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (  
        <div>    
            <Header hamClickHandler={this.hamToggleClickHandler} />
            {hamburger}
            {backdrop}
            <QuoteBlock />
            <AboutContent />
            <Footer />
        </div>
    );
  }
}

export default About;