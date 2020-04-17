import React from 'react';
import '../stylesheets/Fill.scss';
let htmlInput = {};

function Fill(props) {
  console.log(props);
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
    <form className="complete__form" action="#" method="post" id="myForm">
      <label className="complete__form__label required" htmlFor="name">
        Nombre completo
      </label>
      <input onChange={getValue} className="js-form-input-name complete__form__input" type="text" name="name" placeholder="Ej: Doña Rogelia" />
      <label className="complete__form__label" htmlFor="puesto">
        Puesto
      </label>
      <input onChange={getValue} className="js-form-input-job complete__form__input" type="text" name="job" placeholder="Ej: La muñeca que todos quieren" />
      <label className="complete__form__label" htmlFor="image">
        Imagen de perfil
      </label>
      <div className="complete__form__image-fields">
        <label htmlFor="photo" className="complete__form__image-fields__image-button-label" onClick={handleFilePicker}>
          Añadir imagen
        </label>
        <input className="js-input-invisible complete__form__image-fields__image-button-invisible" type="file" name="photo" accept="image/png, image/jpg" ref={myFileField} onChange={uploadImage} />
        <div className="js-divPicture complete__form__image-fields__mini-image-div">
          <img className="js-img complete__form__image-fields__mini-image-div-img" src={props.photo} alt="" />
        </div>
      </div>
      <label className="complete__form__label required" htmlFor="email">
        Email
      </label>
      <input onChange={getValue} className="complete__form__input js-form-input-email" type="email" name="email" placeholder="Ej: la_rogelia@gmail.com" required />
      <label className="complete__form__label required" htmlFor="telephone">
        Teléfono
      </label>
      <input onChange={getValue} className="complete__form__input js-form-input-tel" type="tel" name="phone" placeholder="Ej: 926 61 30 84" required />
      <label className="complete__form__label" htmlFor="linkedin">
        Linkedin
      </label>
      <input onChange={getValue} className="complete__form__input js-form-input-linkedin" type="text" name="linkedin" placeholder="Ej: linkedin.com/in/rogelia-doña" />
      <label className="complete__form__label" htmlFor="github">
        Github
      </label>
      <input onChange={getValue} className="complete__form__input js-form-input-github" type="text" name="github" placeholder="Ej: @doña-roG" />
    </form>
  );
}

export default Fill;
