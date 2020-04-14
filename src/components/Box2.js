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

  function handlePalettePreview(value) {
    console.log('Yo soy Box', value);
  }
  return (
    <ul class="container-box__two">
      <li class="collapse">
        <Collapsable title="Diseña" icon={iconDesign}>
          <Design handlePalettePreview={handlePalettePreview} />
        </Collapsable>
      </li>
      <li class="collapse">
        <Collapsable title="Rellena" icon={iconFill}>
          <Fill handleInputsforFill={handleInputs} />
        </Collapsable>
        {/* <Fill handleInputsforFill={props.handleInputFunction} /> */}
      </li>
      <li class="collapse">
        <Collapsable title="Comparte" icon={iconShare}>
          <Share />
        </Collapsable>
      </li>
    </ul>
  );
}

export default Box2;
