import React, { Component } from 'react';

import './Slideshow.scss';

class Slideshow extends Component {
  render() {
    return (
     
      <main>       
        <div className="preloader">
          <img className="img" src="http://www.wm-painting.ru/images/ShkD4/monet-nympheas.jpg" alt="" />
          <img className="img" src="http://клод-моне.рф/images/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B%20%D0%9A%D0%BB%D0%BE%D0%B4%20%D0%9C%D0%BE%D0%BD%D0%B5%2018/%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B%20%D0%9A%D0%BB%D0%BE%D0%B4%D0%B0%20%D0%9C%D0%BE%D0%BD%D0%B5/%D0%9C%D0%BE%D1%81%D1%82%20%D0%92%D0%B0%D1%82%D0%B5%D1%80%D0%BB%D0%BE%D0%BE%201902%D0%B3.jpg " alt="" />
          <img className="img" src="https://i.ytimg.com/vi/8JacZwfLs2g/maxresdefault.jpg" alt="" />
          <img className="img" src="https://artchive.ru/res/media/img/oy800/work/277/347229.jpg" alt="" />
          <img className="img" src="https://leningradcenter.ru/uploads/thumbs/lc/1920x1080_cropped_2a69eea65a1d9b098d9f1f63d8c41c0a.jpg" alt="" />
        </div>
        <div className="box">
          <div className="left top">
            <div className="side" />
            <div className="reflection" />
            <div className="overlay" />
          </div>
          <div className="center top">
            <div className="side" />
            <div className="reflection" />
            <div className="overlay" />
          </div>
          <div className="right top">
            <div className="side" />
            <div className="reflection" />
            <div className="overlay" />
          </div>
        </div>
      </main>
      
    );
  }
}

export default Slideshow;