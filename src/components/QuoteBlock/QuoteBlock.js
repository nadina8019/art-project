import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './QuoteBlock.scss';


class QuoteBlock extends Component {
  render() {
    return (
      <ScrollAnimation animateIn='fadeInUp'
                      animationInDuration={10000}>
         <Container>
            <Row>
              <div>
                <p className="quotetext">„Я пытался сделать невозможное — нарисовать сам свет.“</p> 
                <p className="text-name">Клод Moне</p>
              </div>
            </Row>
          </Container>
      </ScrollAnimation>        
      
    );
  }
}

export default QuoteBlock;