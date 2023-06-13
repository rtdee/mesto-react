import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const userInfo = React.useContext(CurrentUserContext);

  const cardsSection = 
  props.cards.map((card) => {
    return (
      <Card
        name={card.name}
        link={card.link}
        likes={card.likes.length}
        onCardClick={props.handleCardClick}
        card={card}
        setSelectedCard={props.setSelectedCard}
        key={card.cardId}
        ownerId={card.ownerId}
        onCardLike={props.onCardLike}
        onCardDelete={props.onCardDelete}
      />
    )
  });

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-overlay" onClick={props.handleEditAvatarClick}></div>
            <img className="profile__avatar" src={userInfo.avatar} alt="аватар" />
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{userInfo.name}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.handleEditProfileClick}></button>
            </div>
            <p className="profile__title">{userInfo.about}</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.handleAddPlaceClick}></button>
        </section>
        <section className="elements" aria-label="фотосекция">
          {cardsSection}
        </section>
      </main>
    </>
  );
}

export default Main;
