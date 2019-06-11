import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.scss';


class AboutContent extends Component {
  render() {
    return (
        <Container  className='about-content'>           
            <Row>               
                <Col sm="12" lg="6" md="10">               
                    <img className="gallery-photo" 
                        src="https://theins.ru/wp-content/uploads/2017/11/1-25.jpg" alt="" />                      
                </Col>					
                <Col sm="12" lg="6" md="10">   
                    <p className='span-center'>Арт</p>                 	                                 
                    <h3 className="block-title">Галерея</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                
                </Col>                 
            </Row>
         </Container>
        );
    }
}
                           
export default AboutContent;
                                   
                     
           
                    
