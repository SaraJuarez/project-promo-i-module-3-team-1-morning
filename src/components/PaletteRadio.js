import React from 'react';
// import '../stylesheets/Design.scss';

const PaletteRadio = (props) => {
  const handleClick = (ev) => {
    console.log('Soy un colorinchi pasando datos');

    props.handlePalette({
      name: 'palette',
      value: props.value,
    });
    // console.log('me han clickado', props.value);
  };

  return (
    <div className='design__radio'>
      <input type='radio' id={props.id} name='color' value={props.value} className='js-input-color' />
      <label htmlFor='green' className='design__paleta' onClick={handleClick}>
        <div className={props.primaryColor}></div>
        <div className={props.secondaryColor}></div>
        <div className={props.tertiaryColor}></div>
      </label>
    </div>
  );
};

export default PaletteRadio;
