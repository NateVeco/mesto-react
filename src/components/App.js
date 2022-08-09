import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  function handleCardClick(card) {
    setSelectedCard(card)
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard(null)
  };
    
  return (
    <>
    <div className="page">
        <Header />
        
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          clickOnCard={handleCardClick}
        />
        
        <Footer />
    
    {/* Форма для редактирования профиля */}

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          
      <div className="popup__content">
          <input
            type="text"
            placeholder="Имя"
            name="name"
            id="input-name"
            className="popup__input popup__input_name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="input-name-error popup__error"></span>
          <input
            type="text"
            placeholder="Биография"
            name="bio"
            id="input-bio"
            className="popup__input popup__input_bio"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="input-bio-error popup__error"></span>
          </div>
          
    </PopupWithForm>

        {/* Форма для добавления новых карточек  */}
        
        <PopupWithForm
          name="add-image"
          title="Новое место"
          button="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          
      <div className="popup__content">
          <input
            type="text"
            placeholder="Название"
            name="name"
            id="name-element"
            className="popup__input popup__input_name-element"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="name-element-error popup__error"></span>
          <input
            type="url"
            placeholder="Ссылка на картинку"
            name="link"
            id="link-element"
            className="popup__input popup__input_link-element"
            required
          />
          <span className="link-element-error popup__error"></span>
          </div>
          
    </PopupWithForm>
    
        {/* Попап открытия картинки  */}
        
        <ImagePopup
        card={selectedCard} 
          onClose={closeAllPopups} />
  

    {/* Попап удаления карточки */}

        <PopupWithForm
          name="delete-image"
          title="Вы уверены?"
          button="Да">
    
    </PopupWithForm>
    
    {/* попап изменения аватара */}

        <PopupWithForm
          name="change_avatar"
          title="Обновить аватар"
          button="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>

        <div className="popup__content">
          <input
            type="url"
            placeholder="Ссылка на картинку"
            name="avatar"
            id="link-avatar"
            className="popup__input popup__input_link-element"
            required
          />
          <span className="link-avatar-error link-element-error popup__error"></span>
          </div>
          
        </PopupWithForm>
  
      </div>

    </>
  );
}

export default App;

