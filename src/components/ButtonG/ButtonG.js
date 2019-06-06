import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ButtonG.scss';


class ButtonG extends Component {
  render() {
    return (
        <div  className='button-box'>
           <button className="button-gold" type="submit"> <Link to='/exhibition'>Подробнее<i class="icon-arrow fa fa-long-arrow-right"></i></Link></button>
        </div>
        );
    }
}
                           
export default ButtonG;
                                   
                     
           
                    
