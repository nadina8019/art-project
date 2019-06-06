import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PaintImage.scss';


class PaintImage extends Component {
  render() {
    return (
           <Container>
                <div className="paint-image-section">
                    <Row>			
                        <div className="text-container">
					        <div className="text-inner">	                                 
                                <Col>
                                    <h3>Впечатление. Восходящее солнце</h3>
                                    <p>Картина Клода Моне, написанная в 1872 году с натуры в старом аванпорте Гавра и давшая название художественному направлению «импрессионизм».</p>
                                    <p>Музей Мармоттан-Моне, Париж</p>
                                </Col>                              
                            </div>
						</div>
						<div className="img-container">                        
                            <Col>
                                <img className="paint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/800px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg" alt="" />
                            </Col>					
                        </div>
                    </Row>
                </div>  
                <div className="paint-image-section">
                    <Row>			
						<div className="img-container">                        
                            <Col>
                                <img className="paint" src="https://avatars.mds.yandex.net/get-pdb/1101614/e1de49df-a40e-4000-8d24-8819ed12004f/orig" alt="" />
                            </Col>					
                        </div>
                        <div className="text-container">
					        <div className="text-inner">	                                 
                                <Col>
                                    <h3>Завтрак на траве</h3>
                                    <p>Пожалуй, одной из самых известных картин Клода Моне является «Завтрак на траве». Она была написана в 1866 году и сейчас находится в ГМИИ им. А.С. Пушкина.</p>
                                    
                                </Col>                              
                            </div>
						</div>
                    </Row>
                </div>  
            </Container>
        );
    }
}

export default PaintImage;