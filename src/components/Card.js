import React from 'react';

function Card({link, name, clickOnCard}) {

    function handleCardClick() {
        clickOnCard({link, name})
    }

    return (
          <li className="element">
            <img className="element__image" src={link} alt={name} onClick={handleCardClick} />
        <div className="element__info">
                <h2 className="element__title">{name}</h2>
          <div className="element__like-container">
            <button type="button" className="element__like-button"></button>
            <p className="element__like-number"></p>
          </div>
        </div>
        <button type="button" className="trash-button button"></button>
      </li>
    )
}

export default Card;