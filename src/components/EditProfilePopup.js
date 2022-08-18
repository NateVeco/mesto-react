import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    
    React.useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser, isOpen]);

    function changeInputProfileName(e) {
        setName(e.target.value)
    };

    function changeInputProfileBio(e) {
        setDescription(e.target.value)
    };
    
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ name, about: description})
    };



    return (

         <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          button="Сохранить"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Имя"
            name="name"
            id="input-name"
            value={name || ''}
            className="popup__input popup__input_name"
            minLength="2"
            maxLength="40"
            required
            onChange={changeInputProfileName}
          />
          <span className="input-name-error popup__error"></span>
          <input
            type="text"
            placeholder="Биография"
            name="about"
            id="input-about"
            value={description || ''}
            className="popup__input popup__input_bio"
            minLength="2"
            maxLength="200"
            required
            onChange={changeInputProfileBio}
          />
          <span className="input-bio-error popup__error"></span>
          
    </PopupWithForm>
    )
}

export default EditProfilePopup;