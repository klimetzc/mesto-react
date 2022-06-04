import React from "react";
import PopupWithForm from "./PopupWithForm";

const PopupAvatar = (props) => {
  return (
    <PopupWithForm opened={props.opened} type={props.type}>
      <fieldset className="popup__fieldset">
        <h2 className="popup__title">Обновить аватар</h2>
        <input
          id="avatar-input"
          type="url"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на изображение"
          required
        ></input>
        <span className="popup__error-message avatar-input-error"></span>
        <button type="submit" className="popup__submit">
          Подтвердить
        </button>
      </fieldset>
    </PopupWithForm>
  );
};

export default PopupAvatar;
