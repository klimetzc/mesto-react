import React, { useState } from "react";
import { useEffect } from "react";
import api from "../utils/api";
import Element from "./Element";

const Elements = (props) => {
  const [isTextShown, setIsTextShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
        setIsTextShown(false);
      })
      .finally((res) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="elements">
      {isTextShown && <p className="elements__text">Вы ещё не добавили новых мест.</p>}
      {isLoading && <div className="elements__loader"></div>}
      {cards.map((item) => {
        return (
          <Element
            setImgInPopup={props.setImgInPopup}
            key={item._id}
            src={item.link}
            title={item.name}
            likes={item.likes.length}
          />
        );
      })}
    </section>
  );
};

export default Elements;
