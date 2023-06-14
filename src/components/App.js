import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          myId: res._id
        });
      })
      .catch((res) => {
        alert(`getUserInfo ERROR: ${res}`)
      })
  }, [])

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(data) {
    api.patchUserInfo(data)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          about: data.about,
        });
        closeAllPopups();
      })
      .catch((res) => {
        alert(`patchUserInfo ERROR: ${res}`)
      })
  }

  function handleUpdateAvatar(data) {
    api.patchAvatar(data)
      .then(() => {
        setCurrentUser({
          ...currentUser,
          avatar: data.avatar
        });
        closeAllPopups();
      })
      .catch((res) => {
        alert(`patchAvatar ERROR: ${res}`)
      })
  }

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(
          res.map((el) => ({
            name: el.name,
            link: el.link,
            likes: el.likes,
            cardId: el._id,
            ownerId: el.owner._id
          }))
        )
      })
      .catch((res) => {
        alert(`getInitialCards ERROR: ${res}`)
      })
  }, [])

    function handleCardLike(card) {
      const isLiked = card.likes.some(el => el._id === currentUser.myId);
      if (!isLiked) {
      api.putLike(card.cardId)
        .then((newCard) => {
          setCards((cards) => cards.map((el) => el._id === card.cardId ? newCard : el));
        })
        .catch((res) => {
          alert(`putLike ERROR: ${res}`)
        })
      } else {
      api.deleteLike(card.cardId)
        .then((newCard) => {
          setCards((cards) => cards.map((el) => el._id === card.cardId ? newCard : el));
        })
        .catch((res) => {
          alert(`deleteLike ERROR: ${res}`)
        })
      }
    };
    
    function handleCardDelete(card) {
      api.deleteCard(card.cardId)
        .then(() => {
          setCards(cards.filter(newCard => newCard.cardId !== card.cardId));
        })
        .catch((res) => {
          alert(`deleteCard ERROR: ${res}`)
        })
    }

    function handleAddPlaceSubmit(data) {
      api.postNewCard(data)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        })
        .catch((res) => {
          alert(`postNewCard ERROR: ${res}`)
        })
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <body className="body">
        <div className="page">
          <Header/>
          <Main handleEditProfileClick={setIsEditProfilePopupOpen}
                handleAddPlaceClick={setIsAddPlacePopupOpen}
                handleEditAvatarClick={setIsEditAvatarPopupOpen}
                handleCardClick={setIsImagePopupOpen}
                setSelectedCard={setSelectedCard}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
          />
          <Footer/>
          <EditProfilePopup isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup  isOpen={isAddPlacePopupOpen}
                          onClose={closeAllPopups}
                          onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup  isOpen={isEditAvatarPopupOpen}
                            onClose={closeAllPopups}
                            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm  isOpen={isConfirmDeletePopupOpen}
                          onClose={closeAllPopups}
                          popupType={"confirm-popup"} 
                          popupTitle={"Вы уверены?"} 
                          popupButtonText={"Да"}
                          popupFormType={"confirm-popup-form"}
                          popupFormName={"formconfirm"}

                          children={<></>}
          />
          <ImagePopup isOpen={isImagePopupOpen}
                      onClose={closeAllPopups}
                      link={selectedCard.link}
                      name={selectedCard.name}
          />
        </div>
      </body>    
    </CurrentUserContext.Provider>  
  );
}
export default App;
