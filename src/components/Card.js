import React from "react";
function Card (props) {

  function handleClick() {
    props.setSelectedCard(props.card);
    props.onCardClick(props.card);
  }

  return (
    <article className="element">
      <button className="element__delete-button" type="button" aria-label="Удалить"></button>
      <img className="element__photo" src={props.link} alt={props.name} onClick={handleClick}/>
      <div className="element__container">
        <h2 className="element__header">{props.name}</h2>
        <div className="element__like-button-container">
          <button className="element__like-button" type="button" aria-label="Лайк"></button>
          <p className="element__like-counter">{props.likes}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;