export const formConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    buttonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
};

export const profileEditButton = document.querySelector('.profile__edit-button');
export const profilePopupEdit = document.querySelector('.popup_edit-profile');
export const profileEditForm = profilePopupEdit.querySelector('.popup__form-edit');
export const nameProfileInput = profilePopupEdit.querySelector('.popup__input_name');
export const bioProfileInput = profilePopupEdit.querySelector('.popup__input_bio');
export const nameProfileChange = document.querySelector('.popup__input_name');
export const bioProfileChange = document.querySelector('.popup__input_bio');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profilePopupAdd = document.querySelector('.popup_add-image');
export const nameElementInput = profilePopupAdd.querySelector('.popup__input_name-element');
export const linkElementInput = profilePopupAdd.querySelector('.popup__input_link-element');
export const profileAddForm = profilePopupAdd.querySelector('.popup__form-add');
export const elementPopupImageOpened = document.querySelector('.popup_opened-image');
export const elementImage = elementPopupImageOpened.querySelector('.popup__image');
export const elementTitleImage = elementPopupImageOpened.querySelector('.popup__title-image');
export const popups = document.querySelectorAll('.popup');
export const profileChangeAvatarButton = document.querySelector('.profile__avatar-container');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileChangeAvatarPopup = document.querySelector('.popup_change_avatar');
export const profileChangeAvatarForm = profileChangeAvatarPopup.querySelector('.popup__form-change-avatar');