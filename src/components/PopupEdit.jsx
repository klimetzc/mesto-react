import React from "react";
import PopupWithForm from "./PopupWithForm";

const PopupEdit = (props) => {
  return (
    <PopupWithForm opened={props.opened} type={props.type}>
      <fieldset className="popup__fieldset">
        <h2 className="popup__title">Редактировать профиль</h2>
        <input
          id="name"
          type="text"
          name="name"
          className="popup__input popup__input_type_username"
          placeholder="Ваше имя"
          pattern="\S+.*"
          minLength="2"
          maxLength="40"
          required
        ></input>
        <span className="popup__error-message name-error"></span>
        <input
          id="profession"
          type="text"
          name="profession"
          className="popup__input  popup__input_type_profession"
          placeholder="Ваша профессия"
          pattern="\S+.*"
          minLength="2"
          maxLength="200"
          required
        ></input>
        <span className="popup__error-message profession-error"></span>
        <button type="submit" className={`popup__submit popup__submit_${props.popupType}`}>
          Сохранить
        </button>
      </fieldset>
    </PopupWithForm>
  );
};

export default PopupEdit;
