import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom';
import './ContentGal.scss';


class ContentGal extends Component {
  render() {
    return (
        <div content-gl-bc>
        <Container  className='content-gl'>
            <p className="span-center">Картины</p>
            <h1 className="main-title">Галерея</h1>
            <Row>  
                <Col className="paint-image-box" sm="8" lg="3" md="6">             
                          
                    <img className="paint-image" 
                        src="https://artnow.ru/img/1149000/1149612.jpg" alt="" />                     
                
                </Col>
                 					
                <Col className="paint-image-box" sm="10" lg="3" md="6">                       	                                 
                <img className="paint-image" 
                        src="http://bibliotekar.ru/muzeumLondon/43.files/image001.jpg" alt="" />             
                </Col>  
              
                  
                <Col className="paint-image-box" sm="10" lg="3" md="6">                     	                                 
                <img className="paint-image" 
                        src="https://vivareit.ru/wp-content/uploads/2015/08/soln_mone.jpg" alt="" />             
                </Col>  
                
                
                <Col className="paint-image-box" sm="10" lg="3" md="6">                	                                 
                <img className="paint-image" 
                        src="https://s12.stc.all.kpcdn.net/share/i/12/6022452/inx960x640.jpg" alt="" />             
                </Col>   
                                
            </Row>
            <div  className='button-box'>
           <button className="button-gold" type="submit"> <Link to='/works'>Подробнее<i class="icon-arrow fa fa-long-arrow-right"></i></Link></button>
            </div>
         </Container>
         </div>
        );
    }
}
                           
export default ContentGal;
                                   
                     
           
                    
