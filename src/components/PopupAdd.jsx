import React from "react";
import PopupWithForm from "./PopupWithForm";

const PopupAdd = (props) => {
  return (
    <PopupWithForm opened={props.opened} type={props.type}>
      <fieldset className="popup__fieldset">
        <h2 className="popup__title">Новое место</h2>
        <input
          id="place"
          type="text"
          name="place"
          className="popup__input  popup__input_type_place"
          placeholder="Название места"
          minLength="2"
          maxLength="30"
          required
          pattern="\S+.*"
        ></input>
        <span className="popup__error-message place-error"></span>
        <input
          id="image"
          type="url"
          name="image"
          className="popup__input  popup__input_type_place-image"
          placeholder="Ссылка на изображение"
          required
          pattern="\S+.*"
        ></input>
        <span className="popup__error-message image-error"></span>
        <button type="submit" className="popup__submit popup__submit_add">
          Создать
        </button>
      </fieldset>
    </PopupWithForm>
  );
};

export default PopupAdd;
