import React from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.scss';

const Hamburger = props => { 
    return (
     <nav className="hamburger">
          <ul>           
            <li><Link to='/about'>Обо мне</Link></li>
            <li><Link to='/works'>Галерея</Link></li>
            <li><Link to='/exhibition'>Выставки</Link></li>
            <li><a href="#">Контакты</a></li>
          </ul>
     </nav>
    );
  }


export default Hamburger;