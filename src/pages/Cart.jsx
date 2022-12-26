import React from 'react';
import clear from '../assets/img/icon/clear.svg';

const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <h3 className="cart__title">Ваш заказ</h3>
        <div className="cart__inner">
          <div className="cart__items">
            <div className="cart__item">
              <img src="" alt="" className="cart__item-img" />
              <div className="cart__block-title">
                <p className="cart__item-art">арт. 1589956</p>
                <h4 className="cart__item-title">Кремовое пальто</h4>
              </div>
              <div className="cart__item-clr"></div>
              <div className="cart__item-sz"></div>
              <div className="cart__item-amount"></div>
              <div className="cart__item-price"></div>
              <img src={clear} alt="clear" className="cart__item-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
