import "../index.css";
import Header from "./Header";
import Profile from "./Profile";
import Footer from "./Footer";
import Elements from "./Elements";
import PopupEdit from "./PopupEdit";
import { useState, useEffect, createContext } from "react";
import PopupAvatar from "./PopupAvatar";
import PopupAdd from "./PopupAdd";
import PopupWithImage from "./PopupWithImage";
export const Visibles = createContext("popupsVisible");
export const Theme = createContext("dark");

const App = () => {
  const [popupsVisible, setPopupsVisible] = useState({
    popup_edit: false,
    popup_add: false,
    popup_image: false,
    popup_avatar: false,
    popup_delete: false,
  });

  const [isLigthTheme, setIsLightTheme] = useState(
    localStorage.getItem("lightTheme") ? true : false
  );

  const [imgInPopup, setImgInPopup] = useState({
    link: "https://via.placeholder.com/150",
    alt: "Новое место",
  });

  return (
    <Theme.Provider value={[isLigthTheme, setIsLightTheme]}>
      <div className={`page ${isLigthTheme ? "page_theme_light" : ""}`}>
        <Visibles.Provider value={[popupsVisible, setPopupsVisible]}>
          <div className="main">
            <Header />
            <Profile />
            <Elements setImgInPopup={setImgInPopup} />
            <Footer />
          </div>

          <PopupEdit opened={popupsVisible.popup_edit} type="popup_edit"></PopupEdit>
          <PopupAvatar opened={popupsVisible.popup_avatar} type="popup_avatar"></PopupAvatar>
          <PopupAdd opened={popupsVisible.popup_add} type="popup_add"></PopupAdd>
          <PopupWithImage
            opened={popupsVisible.popup_image}
            type="popup_image"
            imgInfo={imgInPopup}
          ></PopupWithImage>
        </Visibles.Provider>
      </div>
    </Theme.Provider>
  );
};

export default App;
