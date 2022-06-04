import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Theme, Visibles } from "./App";
import spinner from "../images/loader.gif";
import api from "../utils/api";

const Profile = (props) => {
  const context = useContext(Visibles);
  const [theme, setTheme] = useContext(Theme);
  const popups = context[0];
  const setter = context[1];
  const [userName, setUserName] = useState("Username");
  const [userDescription, setUserDescription] = useState("User description");
  const [userAvatar, setUserAvatar] = useState(spinner);

  const openEditPopup = () => {
    console.log("clicked");
    setter({
      ...popups,
      popup_edit: true,
    });
  };

  const openAvatarPopup = () => {
    setter({
      ...popups,
      popup_avatar: true,
    });
  };

  const openAddAvatar = () => {
    setter({
      ...popups,
      popup_add: true,
    });
  };

  useEffect(() => {
    api
      .getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err.message);
        setUserAvatar("https://via.placeholder.com/150x150");
      });
  }, []);

  return (
    <section className="profile">
      <div className="profile__user">
        <img
          src={userAvatar}
          alt="Аватар пользователя (динамический)"
          className="profile__avatar"
        ></img>
        <div className="profile__avatar-button" onClick={openAvatarPopup}></div>
        <div className="profile__info">
          <div className="profile__names">
            <h1 className="profile__username">{userName}</h1>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button
            className={`profile__edit-button ${theme && "profile__edit-button_theme_light"}`}
            onClick={openEditPopup}
          ></button>
        </div>
      </div>

      <button
        className={`profile__add-button ${theme && "profile__add-button_theme_light"}`}
        onClick={openAddAvatar}
      ></button>
    </section>
  );
};

export default Profile;
