import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './ContentEx.scss';



class ContentEx extends Component {
  render()  {
      var settings = {       
    infinite: true,
    className: "center",
    centerPadding: "60px",
    swipeToSlide: true,  
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
     <Container>
         <div className="text-title">
          <p className="span-center">Анонс</p>
            <h1 className="main-title">Выставки</h1>
        </div>
        <div>        
        <Slider {...settings}>
          <div className="img-box">
              <img src="http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg" alt=""/>
            <h3>Landscape Painting</h3>
            <p>JULY 08 - JULY 10 </p>
          </div>
          <div className="img-box">
          <img src="http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg" alt="" />
            <h3>Art Of The 19th Century</h3>
            <p>August 22</p>
          </div>
          <div className="img-box">
          <img src="http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg" alt=""/>
            <h3>French art</h3>
            <p>September 22</p>
          </div>
          <div className="img-box">
          <img src="http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg" alt=""/>
            <h3>Landscape Painting</h3>
            <p>JULY 08 - JULY 10 </p>
          </div>
          <div className="img-box">
          <img src="http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg" alt=""/>
            <h3>Art Of The 19th Century</h3>
            <p>August 22</p>
          </div>         
        </Slider>
      </div>   
      <div  className='button-box'>
           <button className="button-gold" type="submit"> <Link to='/exhibition'>Подробнее<i class="icon-arrow fa fa-long-arrow-right"></i></Link></button>
        </div>
     </Container>
      
    );
  }
}

export default ContentEx;