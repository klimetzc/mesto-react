import React, { useState } from "react";
import { useEffect } from "react";
import api from "../utils/api";
import Element from "./Element";

const Elements = (props) => {
  const [isTextShown, setIsTextShown] = useState(false);
  const [textMessage, setTextMessage] = useState("Вы ещё не добавили новых мест");
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
        setIsTextShown(false);
      })
      .catch((err) => {
        setTextMessage(`Ошибка: ${err.message}`);
        setIsTextShown(true);
      })
      .finally((res) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="elements">
      {isTextShown && <p className="elements__text">{textMessage}</p>}
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
