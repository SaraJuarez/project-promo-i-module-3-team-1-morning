import React from 'react';
import '../stylesheets/Fill.scss';
let htmlInput = {};

function Fill(props) {
  const getValue = (ev) => {
    htmlInput = ev.target;
    props.handleInputsforFill(htmlInput);
  };
  //function evento al input ref file
  const fr = new FileReader();
  const myFileField = React.createRef();

  const handleFilePicker = () => {
    myFileField.current.click();
  };
  const uploadImage = (ev) => {
    const myFile = ev.currentTarget.files[0];
    fr.addEventListener('load', getImage);
    fr.readAsDataURL(myFile);
  };

  const getImage = () => {
    const image = fr.result;
    htmlInput.photo = image;
    props.handleInputforImg(htmlInput);
  };

  return (
    <form className='complete__form' action='#' method='post' id='myForm'>
      <label className='complete__form__label required' htmlFor='name'>
        Nombre completo
      </label>
      <input onChange={getValue} className='js-form-input-name complete__form__input' type='text' name='name' placeholder='Ej: Doña Rogelia' value={props.properties.name ? props.properties.name : ''} />
      <label className='complete__form__label' htmlFor='puesto'>
        Puesto
      </label>
      <input onChange={getValue} className='js-form-input-job complete__form__input' type='text' name='job' placeholder='Ej: La muñeca que todos quieren' value={props.properties.job ? props.properties.job : ''} />
      <label className='complete__form__label' htmlFor='image'>
        Imagen de perfil
      </label>
      <div className='complete__form__image-fields'>
        <label htmlFor='photo' className='complete__form__image-fields__image-button-label' onClick={handleFilePicker}>
          Añadir imagen
        </label>
        <input className='js-input-invisible complete__form__image-fields__image-button-invisible' type='file' name='photo' accept='image/png, image/jpg' ref={myFileField} onChange={uploadImage} />
        <div className='js-divPicture complete__form__image-fields__mini-image-div'>
          <img className='js-img complete__form__image-fields__mini-image-div-img' src={props.properties.photo} alt='' />
        </div>
      </div>
      <label className='complete__form__label required' htmlFor='email'>
        Email
      </label>
      <input onChange={getValue} className='complete__form__input js-form-input-email' type='email' name='email' placeholder='Ej: la_rogelia@gmail.com' value={props.properties.email ? props.properties.email : ''} required />
      <label className='complete__form__label required' htmlFor='telephone'>
        Teléfono
      </label>
      <input onChange={getValue} className='complete__form__input js-form-input-tel' type='tel' name='phone' placeholder='Ej: 926 61 30 84' value={props.properties.phone ? props.properties.phone : ''} required />
      <label className='complete__form__label' htmlFor='linkedin'>
        Linkedin
      </label>
      <input onChange={getValue} className='complete__form__input js-form-input-linkedin' type='text' name='linkedin' placeholder='Ej: linkedin.com/in/rogelia-doña' value={props.properties.linkedin ? props.properties.linkedin : ''} />
      <label className='complete__form__label' htmlFor='github'>
        Github
      </label>
      <input onChange={getValue} className='complete__form__input js-form-input-github' type='text' name='github' placeholder='Ej: @doña-roG' value={props.properties.github ? props.properties.github : ''} />
    </form>
  );
}

export default Fill;
