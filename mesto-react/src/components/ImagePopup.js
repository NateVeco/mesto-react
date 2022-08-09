import React from 'react';

function ImagePopup({card, onClose}) {
    return (
      <div className={`popup popup_opened-image ${card ? "popup_opened" : ""}`}>
      <div className="popup__content popup__content_type_image">
        <button type="button" className="popup__button-close button" onClick={onClose}></button>
                <img className="popup__image" src={card ? card.link : ""} alt={card ? card.name : ""} />
                <h2 className="popup__title-image">{card ? card.name : "" }</h2>
      </div>
    </div>
   );
};

export default ImagePopup;