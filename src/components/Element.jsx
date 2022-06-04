import React from "react";
import { useContext } from "react";
import { Theme, Visibles } from "../App";

const Element = (props) => {
  const [popups, setter] = useContext(Visibles);
  const [theme, setTheme] = useContext(Theme);
  const handleImageClick = () => {
    console.log("nothing");
    props.setImgInPopup({
      link: props.src,
      alt: props.title,
    });
    setter({
      ...popups,
      popup_image: true,
    });
  };
  return (
    <article className="element">
      <img
        onClick={handleImageClick}
        className="element__image"
        src={props.src}
        alt={props.title}
      ></img>
      <h2 className="element__title">{props.title}</h2>
      <div className="element__like-container">
        <button className={`element__like ${theme ? "element__like_theme_light" : ""}`}></button>
        <p className="element__like-label">{props.likes}</p>
      </div>

      <button className="element__delete"></button>
    </article>
  );
};

export default Element;
