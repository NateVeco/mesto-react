import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useRef();

  React.useEffect(() => {
    currentUser.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: currentUser.current.value,
    });
  }

  return (
    <PopupWithForm
      name="change_avatar"
      title="Обновить аватар"
      button="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        placeholder="Ссылка на картинку"
        name="avatar"
        id="link-avatar"
        className="popup__input popup__input_link-element"
        required
        ref={currentUser}
      />
      <span className="link-avatar-error link-element-error popup__error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
