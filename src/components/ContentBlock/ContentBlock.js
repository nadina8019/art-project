import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './ContentBlock.scss';


class ContentBlock extends Component {
  render() {
    return (
        <Container>
            <p className="span-center">Наши</p>
            <h1 className="main-title">Художники</h1>
            <Row className="justify-content-center">               
                <Col sm="12" lg="4" md="6">               
                    <img className="paint" 
                        src="https://24smi.org/public/media/celebrity/2017/05/02/gGw5ZJ7YVhZE_pablo-pikasso.jpg" alt="" /> 
                        <h4 className="p-name">Пабло Пикассо</h4>                      
                </Col>					
                <Col sm="12" lg="4" md="6">                    	                                 
                    <img className="paint" 
                        src="http://www.arthistory.ru/img/dali/salvador_dali_foto.jpg" alt="" /> 
                        <h4 className="p-name">Сальвадор Дали</h4> 
                </Col>       
                <Col sm="12" lg="4" md="6">                    	                                 
                    <img className="paint" 
                        src="https://muzei-mira.com/templates/museum/images/artist/edgar-dega+.jpg" alt="" />  
                        <h4 className="p-name">Эдгар Дега</h4> 
                </Col>      
                <Col sm="12" lg="4" md="6" >                    	                                 
                    <img className="paint" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Kustodiev_BM.jpg/200px-Kustodiev_BM.jpg" alt="" /> 
                        <h4 className="p-name">Борис Кустодиев</h4>  
                </Col>      
                <Col sm="12" lg="4" md="6" >                    	                                 
                    <img className="paint" 
                        src="https://artchive.ru/res/media/img/oy1000/work/66f/294306.jpeg" alt="" />  
                        <h4 className="p-name">Клод Моне</h4> 
                </Col>              
            </Row>
         </Container>
        );
    }
}
                           
export default ContentBlock;
                                   
                     
           
                    
