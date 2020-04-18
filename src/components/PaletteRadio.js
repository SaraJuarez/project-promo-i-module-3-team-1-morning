import React from 'react';
// import '../stylesheets/Design.scss';

const PaletteRadio = (props) => {
  const handleChange = () => {
    props.handlePalette({
      name: 'palette',
      value: props.value,
    });
  };
  console.log('radio', props.pal);
  return (
    <div className='design__radio'>
      <input type='radio' id={props.id} name='color' value={props.value} className='js-input-color' onChange={handleChange} checked={props.pal.palette === parseInt(props.id)} />
      <label htmlFor={props.id} className='design__paleta'>
        <div className={props.primaryColor}></div>
        <div className={props.secondaryColor}></div>
        <div className={props.tertiaryColor}></div>
      </label>
    </div>
  );
};

export default PaletteRadio;
