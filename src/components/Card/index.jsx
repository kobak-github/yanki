import React from 'react';

const Card = ({ id, imageUrl, title, price, size, color }) => {
  const colorClass = [
    'card__color card__color-white',
    'card__color card__color-blue',
    'card__color card__color-yellow',
  ];
  return (
    <div className="content__items">
      <div className="card">
        <div className="card__block-img">
          <a href="#" className="card__img-link">
            <div className="card__favorite">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.50061 1.89671C9.26233 0.314993 11.9848 0.367492 13.682 2.06771C15.3785 3.76868 15.437 6.47763 13.859 8.24459L7.49911 14.6135L1.14073 8.24459C-0.437237 6.47763 -0.377988 3.76418 1.31773 2.06771C3.01645 0.369742 5.73365 0.312743 7.50061 1.89671ZM12.62 3.12744C11.495 2.00096 9.68007 1.95521 8.50259 3.01269L7.50136 3.91118L6.49938 3.01344C5.31816 1.95446 3.50694 2.00096 2.37896 3.12894C1.26148 4.24642 1.20523 6.03514 2.23496 7.21711L7.49986 12.4903L12.7648 7.21786C13.7952 6.03514 13.739 4.24867 12.62 3.12744Z"
                  fill="white"
                />
              </svg>
            </div>
            <img src={imageUrl} alt="prod" className="card__img" />
          </a>
        </div>
        <div className="card__info">
          <div className="card__block-title">
            <p className="card__title">{title}</p>
            <span className="card__new">new</span>
          </div>
          <b className="card__price">{price} грн</b>
          <div className="card__block-size">
            {size.map((sz, i) => {
              return (
                <span key={i} className="card__size">
                  {sz}
                </span>
              );
            })}
          </div>
          <div className="card__block-color ">
            {color.map((cl, i) => {
              return <div key={i} className={colorClass[cl]}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
