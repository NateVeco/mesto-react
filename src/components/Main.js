import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main({ onEditAvatar, onEditProfile, onAddPlace, clickOnCard }) {

  const [userName, changeUserName] = React.useState('');
  const [userDescription, changeUserDescription] = React.useState('');
  const [userAvatar, changeUserAvatar] = React.useState('');
  const [cards, addNewCard] = React.useState([]);

  React.useEffect(() => {
    api.getProfileInfo()
      .then((res) => {
        changeUserName(res.name);
        changeUserDescription(res.about);
        changeUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    api.getCardList()
      .then((res) => {
        addNewCard(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  return (
    <>
      <main className="content">
        
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
            <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__text">
            <h1 className="profile__name" name="name">{userName}</h1>
            <button
              className="profile__edit-button button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__bio" name="about">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__table">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                link={item.link}
                name={item.name}
              clickOnCard={clickOnCard} />
            )
          })}
        </ul>
      </section>
      </main>
      </>
      );
}

export default Main;