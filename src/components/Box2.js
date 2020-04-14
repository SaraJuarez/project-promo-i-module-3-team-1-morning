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

  const handleInputFile = (value) => {
    props.handleSaveImg(value);
  };

  return (
    <ul className='container-box__two'>
      <li className='collapse'>
        <Collapsable title='Diseña' icon={iconDesign}>
          <Design handlePalette={props.handlePalette} properties={props.stateInfo} />
        </Collapsable>
      </li>
      <li className='collapse'>
        <Collapsable title='Rellena' icon={iconFill}>
          <Fill handleInputsforFill={handleInputs} handleInputforImg={handleInputFile} photo={props.photo} />
        </Collapsable>
      </li>
      <li className='collapse'>
        <Collapsable title='Comparte' icon={iconShare}>
          <Share />
        </Collapsable>
      </li>
    </ul>
  );
}

export default Box2;
