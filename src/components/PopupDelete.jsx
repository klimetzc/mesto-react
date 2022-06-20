import React, { useContext } from "react";
import api from "../utils/api";
import { Cards, Visibles } from "./App";
import Popup from "./Popup";

const PopupDelete = (props) => {
  const [popups, setter] = useContext(Visibles);
  const [cards, setCards] = useContext(Cards);

  const currentPopup = props.type;
  const copiedPopups = { ...popups };
  copiedPopups[currentPopup] = false;

  const submitHandler = (event) => {
    event.preventDefault();
    setter({ ...copiedPopups });
    api.deleteCard(props.currentCard).then((res) => {
      setCards(cards.filter((item) => item._id !== props.currentCard));
    });
  };

  return (
    <Popup opened={props.opened} type={props.type}>
      <h2 className="popup__title">Вы уверены?</h2>
      <form className="popup__form" onSubmit={submitHandler}>
        <button type="submit" className="popup__submit">
          Подтвердить
        </button>
      </form>
      <button type="submit" className="popup__close-button"></button>
    </Popup>
  );
};

export default PopupDelete;
