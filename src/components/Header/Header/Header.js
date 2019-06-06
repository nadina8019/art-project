
import React from 'react';
import ToggleButton from '../Hamburger/ToggleButton';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = props => (
      <header className="header">
        <nav className="header_navigation">
        <div className="header_toggle-button">
          <ToggleButton click= {props.hamClickHandler} />
        </div>
        <div className="header_logo">
          <Link to="/" className="logo">Клод<span> Моне</span></Link>
        </div>
        <div className="spacer" />
        <div className="header_navigation-items">
          <ul>
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/about'>О себе</Link></li>
          <li><Link to='/works'>Галерея</Link></li>
            <li><Link to='/exhibition'>Выставки</Link></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
      </nav>
      </header>   
  )

export default Header;