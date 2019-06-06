import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.scss';


class AboutContent extends Component {
  render() {
    return (
        <Container  className='about-content'>           
            <Row>               
                <Col sm="12" lg="6" md="10">               
                    <img className="paint" 
                        src="https://artchive.ru/res/media/img/oy1000/work/66f/294306.jpeg" alt="" />                      
                </Col>					
                <Col sm="12" lg="6" md="10">   
                    <p className='span-center'>Художник</p>                 	                                 
                    <h3 className="block-title">Клод Моне</h3>
                    <p>Оска́р Клод Моне́ (фр. Oscar-Claude Monet; 14 ноября 1840, Париж — 5 декабря 1926, Живерни) — французский живописец, один из основателей импрессионизма. Художник, который не только стал одним из основателей импрессионизма, но и дал название этому направлению живописи. Именно из-за его картины, описывающий восход солнца в порту Гавра впоследствии так назовут новое художественное течение.</p>                
                </Col>                 
            </Row>
         </Container>
        );
    }
}
                           
export default AboutContent;
                                   
                     
           
                    
