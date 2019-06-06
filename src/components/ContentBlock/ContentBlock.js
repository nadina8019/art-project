import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ContentBlock.scss';


class ContentBlock extends Component {
  render() {
    return (
        <Container  className='justify-content-center'>
            <p className="span-center">Жанр</p>
            <h1 className="main-title">Импрессионизм</h1>
            <Row>               
                <Col sm="12" lg="6" md="10">               
                    <img className="paint" 
                        src="https://artchive.ru/res/media/img/oy1000/work/66f/294306.jpeg" alt="" />                      
                </Col>					
                <Col sm="12" lg="6" md="10">                    	                                 
                    <h3 className="block-title">Клод Моне</h3>
                    <p>Оскар Клод Моне – великий импрессионист, всю свою жизнь рисовавший картины. Художник является основателем и теоретиком французского импрессионизма, которому следовал на протяжении всего творческого пути. </p>                
                </Col>                 
            </Row>
         </Container>
        );
    }
}
                           
export default ContentBlock;
                                   
                     
           
                    
