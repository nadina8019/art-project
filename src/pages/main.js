import React, { Component } from 'react';
import Header from '../components/Header/Header/Header';
import Hamburger from '../components/Header/Hamburger/Hamburger';
import Backdrop from '../components/Header/Backdrop/Backdrop';
import Slideshow from '../components/Slideshow/Slideshow';
import ContentGal from '../components/ContentGal/ContentGal';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import ContentEx from '../components/ContentEx/ContentEx';
import Footer from '../components/Footer/Footer';


import '../App.scss';


class Main extends Component {
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
        <Slideshow />
        <ContentBlock />
        <ContentEx />  
        <ContentGal />     
        <Footer />
     </div>
    );
  }
}

export default Main;