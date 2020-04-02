import React from 'react';
import Collapsable from './Collapsable';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

function Box2(props) {
  return (
    <div>
      <Collapsable />
      <Design />
      <Collapsable />
      <Fill />
      <Collapsable />
      <Share />
    </div>
  );
}

export default Box2;
