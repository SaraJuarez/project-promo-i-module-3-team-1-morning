import React from 'react';
/* import {useState} from 'react'; */
import '../stylesheets/Fill.scss';

function Fill(props) {
  const getValue = (ev) => {
    let writeValue = ev.target.value;
    let writedType = ev.target.name;
    props.handleInputsforFill({
      value: writeValue,
      type: writedType,
    });
  };

  return (
    <form className="complete__form" action="#" method="post" id="myForm">
      <label className="complete__form__label required" htmlFor="name">
        Nombre completo
      </label>
      <input onChange={getValue} className="js-form-input-name complete__form__input" type="text" name="name" placeholder="Ej: Doña Rogelia" />
      <label className="complete__form__label" for="puesto">
        Puesto
      </label>
      <input onChange={getValue} className="js-form-input-job complete__form__input" type="text" name="job" placeholder="Ej: La muñeca que todos quieren" />
      <label className="complete__form__label" for="image">
        Imagen de perfil
      </label>
      <div className="complete__form__image-fields">
        <label htmlFor="photo" className="complete__form__image-fields__image-button-label">
          Añadir imagen
        </label>
        {/* <input className="js-input-invisible complete__form__image-fields__image-button-invisible" type="file" name="photo" accept="image/png, image/jpg" onchange="previewFile()" /> */}
        <div className="js-divPicture complete__form__image-fields__mini-image-div">
          <img className="js-img complete__form__image-fields__mini-image-div-img" src="" alt="" />
        </div>
      </div>
      <label className="complete__form__label required" htmlFor="email">
        Email
      </label>
      <input className="complete__form__input js-form-input-email" type="email" name="email" placeholder="Ej: la_rogelia@gmail.com" required />
      <label className="complete__form__label required" for="telephone">
        Teléfono
      </label>
      <input className="complete__form__input js-form-input-tel" type="tel" name="phone" placeholder="Ej: 926 61 30 84" required />
      <label className="complete__form__label" htmlFor="linkedin">
        Linkedin
      </label>
      <input className="complete__form__input js-form-input-linkedin" type="text" name="linkedin" placeholder="Ej: linkedin.com/in/rogelia-doña" />
      <label className="complete__form__label" htmlFor="github">
        Github
      </label>
      <input className="complete__form__input js-form-input-github" type="text" name="github" placeholder="Ej: @doña-roG" />
    </form>
  );
}

export default Fill;
