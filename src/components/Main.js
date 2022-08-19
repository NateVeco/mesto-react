import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  clickOnCard,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={currentUser?.avatar}
              alt="Аватар"
            />
            <div
              className="profile__avatar-overlay"
              onClick={onEditAvatar}
            ></div>
          </div>
          <div className="profile__text">
            <h1 className="profile__name" name="name">
              {currentUser?.name}
            </h1>
            <button
              className="profile__edit-button button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__bio" name="about">
              {currentUser?.about}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__table">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                clickOnCard={clickOnCard}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
