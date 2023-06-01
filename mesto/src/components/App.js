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

          popupFirstInputClass={"popup__txt-input_type_name"}
          popupFirstInputType={"text"}
          popupFirstInputId={"profile-name-input"}
          popupFirstInputName={"name"}
          popupFirstInputPlaceholder={"Имя"}
          popupFirstInputMinLength={"2"}
          popupFirstInputMaxLength={"40"}
          popupFirstInputError={"profile-name-input-error"}

          popupSecondInputClass={"popup__txt-input_type_title"}
          popupSecondInputType={"text"}
          popupSecondInputId={"profile-title-input"}
          popupSecondInputName={"about"}
          popupSecondInputPlaceholder={"О себе"}
          popupSecondInputMinLength={"2"}
          popupSecondInputMaxLength={"200"}
          popupSecondInputError={"profile-title-input-error"}
          />
          <PopupWithForm // add place
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          popupType={"add-place-popup"} 
          popupTitle={"Новое место"} 
          popupButtonText={"Создать"}
          popupFormType={"add-place-popup__form"}
          popupFormName={"formplace"}

          popupFirstInputClass={"popup__txt-input_type_place"}
          popupFirstInputType={"text"}
          popupFirstInputId={"place-name-input"}
          popupFirstInputName={"name"}
          popupFirstInputPlaceholder={"Название"}
          popupFirstInputMinLength={"2"}
          popupFirstInputMaxLength={"30"}
          popupFirstInputError={"place-name-input-error"}

          popupSecondInputClass={"popup__txt-input_type_photo"}
          popupSecondInputType={"url"}
          popupSecondInputId={"place-url-input"}
          popupSecondInputName={"link"}
          popupSecondInputPlaceholder={"Ссылка на картинку"}
          popupSecondInputError={"place-url-input-error"}
          />
          <PopupWithForm // avatar edit
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          popupType={"update-avatar-popup"} 
          popupTitle={"Обновить аватар"} 
          popupButtonText={"Сохранить"}
          popupFormType={"update-avatar-popup__form"}
          popupFormName={"formplace"}

          popupFirstInputClass={"popup__txt-input_type_avatar"}
          popupFirstInputType={"url"}
          popupFirstInputId={"avatar-url-input"}
          popupFirstInputName={"avatar"}
          popupFirstInputPlaceholder={"Ссылка на картинку"}
          popupFirstInputError={"avatar-url-input-error"}

          popupSecondInputClass={"hidden"}
          popupSecondInputError={"hidden"}
          />
          <PopupWithForm // delete confirm
          isOpen={isConfirmDeletePopupOpen}
          onClose={closeAllPopups}
          popupType={"confirm-popup"} 
          popupTitle={"Вы уверены?"} 
          popupButtonText={"Да"}
          popupFormType={"confirm-popup-form"}
          popupFormName={"formconfirm"}

          popupFirstInputClass={"hidden"}
          popupFirstInputError={"hidden"}

          popupSecondInputClass={"hidden"}
          popupSecondInputError={"hidden"}
          />
          <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
          />
        </div>
      </body>    
    </>  
  );
}
export default App;
