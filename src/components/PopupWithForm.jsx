import React from "react";
import Popup from "./Popup";

const PopupWithForm = (props) => {
  return (
    <Popup opened={props.opened} type={props.type}>
      <form className={`form-${props.popupType} popup__form popup__form_${props.popupType}`}>
        {props.children}
      </form>
      <button type="button" className="popup__close-button"></button>
    </Popup>
  );
};

export default PopupWithForm;
