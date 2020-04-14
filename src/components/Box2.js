import React from 'react';
import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import iconDesign from '../images/object-ungroup-regular.svg';
import iconFill from '../images/keyboard-regular.svg';
import iconShare from '../images/share-alt-solid.svg';

import '../stylesheets/Box2.scss';

function Box2(props) {
  const handleInputs = (value) => {
    props.handlefunction(value);
  };

  return (
    <ul className='container-box__two'>
      <li className='collapse'>
        <Collapsable title='Diseña' icon={iconDesign} />
        <Design handlePalette={props.handlePalette} properties={props.stateInfo} />
      </li>
      <li className='collapse'>
        <Collapsable title='Rellena' icon={iconFill} />
        <Fill handleInputsforFill={handleInputs} />
        {/* <Fill handleInputsforFill={props.handleInputFunction} /> */}
      </li>
      <li className='collapse'>
        <Collapsable title='Comparte' icon={iconShare} />
        <Share />
      </li>
    </ul>
  );
}

export default Box2;
