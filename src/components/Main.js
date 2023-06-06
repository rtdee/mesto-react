import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userInfo, setUserInfo] = React.useState({ userName: '', userDescription: '', userAvatar: '' });
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserInfo({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar
        })
      })
  }, [])

  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(
          res.map((el) => ({
            name: el.name,
            link: el.link,
            likes: el.likes,
            cardId: el._id
          }))
        )
      })
  }, [])

  const cardsSection = 
    cards.map((card) => {
      return (
      <Card
        name={card.name}
        link={card.link}
        likes={card.likes.length}
        onCardClick={props.handleCardClick}
        card={card}
        setSelectedCard={props.setSelectedCard}
        key={card.cardId}
      />
      )
    });

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-overlay" onClick={props.handleEditAvatarClick}></div>
            <img className="profile__avatar" src={userInfo.userAvatar} alt="аватар" />
          <div className="profile__info">
            <div className="profile__container">
              <h1 className="profile__name">{userInfo.userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.handleEditProfileClick}></button>
            </div>
            <p className="profile__title">{userInfo.userDescription}</p>
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
