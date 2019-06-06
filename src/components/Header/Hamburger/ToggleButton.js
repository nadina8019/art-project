
import React  from 'react';
import './ToggleButton.scss';

const ToggleButton = props => (
 
     <button className="toggle_button" onClick={props.click}>
         <div className="button_line"/>
         <div className="button_line"/>
         <div className="button_line"/>
     </button>
    );
 

export default ToggleButton;