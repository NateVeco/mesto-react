import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, clickOnCard, onCardLike, onCardDelete }) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardDeleteButtonClassName = (
  `trash-button ${isOwn ? 'trash-button_active' : ''}`
  ); 
  const cardLikeButtonClassName = (
  `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
); 

    function handleCardClick() {
        clickOnCard(card)
  };
  
  function handleLikeClick() {
    onCardLike(card);
  };

   function handleDeleteClick() {
    onCardDelete(card);
  };

    return (
          <li className="element">
            <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
        <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <p className="element__like-number">{card.likes.length}</p>
          </div>
        </div>
        <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
      </li>
    )
}

export default Card;