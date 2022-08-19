import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameCard = React.useRef();
  const linkCard = React.useRef();

  React.useEffect(() => {
    nameCard.current.value = "";
    linkCard.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameCard.current.value,
      link: linkCard.current.value,
    });
  }

  return (
    <PopupWithForm
      name="add-image"
      title="Новое место"
      button="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Название"
        name="name"
        id="name-element"
        className="popup__input popup__input_name-element"
        minLength="2"
        maxLength="30"
        required
        ref={nameCard}
      />
      <span className="name-element-error popup__error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        id="link-element"
        className="popup__input popup__input_link-element"
        required
        ref={linkCard}
      />
      <span className="link-element-error popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
