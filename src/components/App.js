import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  React.useEffect(() => {
    api.getCardList()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
      api.getLike(card._id, !isLiked)
        .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
        console.log(err)
      })
  }; 

   function handleCardDelete(card) {
     api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((d) => (d._id !== card._id)));
    })
       .catch((err) => {
         console.log(err)
       });
  };

  function handleUpdateUser({ name, about }) {
    api.validProfileInfo({ name, about })
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((res) => {
      console.log(res)
    })
  };

  function handleUpdateAvatar({ avatar }) {
    api.changeProfileAvatar({ avatar })
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((res) => {
      console.log(res)
    })
  };

  function handleAddPlaceSubmit(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch((err) => {
      console.log(err)
    })
  };
    
  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
        <Header />
        
        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            clickOnCard={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
        />
        
        <Footer />
    
    {/* Форма для редактирования профиля */}

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

        {/* Форма для добавления новых карточек  */}
        
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
    
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
          
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
        
          
          </CurrentUserContext.Provider>
      </div>

    </>
  );
}

export default App;

