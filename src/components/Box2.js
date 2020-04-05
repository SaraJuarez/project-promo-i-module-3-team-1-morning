import React from 'react';
import Collapsable from './Collapsable';
import Fill from './Fill'

function Box2(props) {
  return (
    <div>
      <Collapsable />

      <Collapsable />
      <Fill />
      <Collapsable />

    </div>
  );
}

export default Box2;
