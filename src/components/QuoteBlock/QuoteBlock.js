import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
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
                <p className="quotetext">„Искусство правдиво тогда, когда оно слито с правдой жизни..“</p> 
                <p className="text-name">Абай</p>
              </div>
            </Row>
          </Container>
      </ScrollAnimation>        
      
    );
  }
}

export default QuoteBlock;