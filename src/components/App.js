import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/api.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

  function closeAllPopups(){
    setIsEditProfilePopupOpen();
    setIsAddPlacePopupOpen();
    setIsEditAvatarPopupOpen();
    setIsImagePopupOpen();
    setSelectedCard('');
  }

  return (
    <>
      <body className="body">
        <div className="page">
          <Header/>
          <Main
          handleEditProfileClick={setIsEditProfilePopupOpen}
          handleAddPlaceClick={setIsAddPlacePopupOpen}
          handleEditAvatarClick={setIsEditAvatarPopupOpen}
          handleCardClick={setIsImagePopupOpen}
          setSelectedCard={setSelectedCard}
          />
          <Footer/>
          <PopupWithForm // edit profile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          popupType={"profile-popup"} 
          popupTitle={"Редактировать профиль"} 
          popupButtonText={"Сохранить"}
          popupFormType={"profile-popup-form"}
          popupFormName={"formprofile"}

          children={
            <>
              <input className="popup__txt-input popup__txt-input_type_name" type="text" id="profile-name-input" name="name" placeholder="Имя" required minlength="2" maxlength="40"/>
              <span className="popup__error profile-name-input-error"></span>
              <input className="popup__txt-input popup__txt-input_type_title" type="text" id="profile-title-input" name="about" placeholder="О себе" required minlength="2" maxlength="200"/>
              <span className="popup__error profile-title-input-error"></span>
            </>
          }
          />
          <PopupWithForm // add place
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          popupType={"add-place-popup"} 
          popupTitle={"Новое место"} 
          popupButtonText={"Создать"}
          popupFormType={"add-place-popup__form"}
          popupFormName={"formplace"}

          children={
            <>
              <input className="popup__txt-input popup__txt-input_type_place" type="text" id="place-name-input" name="name" placeholder="Название" required minlength="2" maxlength="30"/>
              <span className="popup__error place-name-input-error"></span>
              <input className="popup__txt-input popup__txt-input_type_photo" type="url" id="place-url-input" name="link" placeholder="Ссылка на картинку" required/>
              <span className="popup__error place-url-input-error"></span>
            </>
          }
          />
          <PopupWithForm // avatar edit
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          popupType={"update-avatar-popup"} 
          popupTitle={"Обновить аватар"} 
          popupButtonText={"Сохранить"}
          popupFormType={"update-avatar-popup__form"}
          popupFormName={"formplace"}

          children={
            <>
              <input class="popup__txt-input popup__txt-input_type_avatar" type="url" id="avatar-url-input" name="avatar" placeholder="Ссылка на картинку" required/>
              <span class="popup__error avatar-url-input-error"></span>
            </>
          }
          />
          <PopupWithForm // delete confirm
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          popupType={"confirm-popup"} 
          popupTitle={"Вы уверены?"} 
          popupButtonText={"Да"}
          popupFormType={"confirm-popup-form"}
          popupFormName={"formconfirm"}

          children={<></>}
          />
          <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          link={selectedCard.link}
          name={selectedCard.name}
          />
        </div>
      </body>    
    </>  
  );
}
export default App;
