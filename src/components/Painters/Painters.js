import React, { Component } from 'react';
import PainterList from '../../containers/painter-list';
import PainterDetail from '../../containers/painter-details';
import { Container } from 'reactstrap';
import './Painters.scss';



class Painters extends Component {
  render() {
    return (
        <Container>
            <p className="p-center">Наши</p>
            <h1 className="painters-title">Художники</h1>
            <PainterList />
            <PainterDetail />       
        </Container>
        );
    }
}
                           
export default Painters;
                                   
                     
           
                    
