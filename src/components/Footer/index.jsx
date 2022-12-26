import React from 'react';
import instagram from '../../assets/img/icon/instagram.svg';
import telegram from '../../assets/img/icon/telegram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__company">
              <p className="footer__title">КОМПАНИЯ</p>
              <a href="#" className="footer__link">
                <p className="footer__text">О нас</p>
              </a>
              <a href="#" className="footer__link">
                <p className="footer__text">Контакты</p>
              </a>
            </div>
            <div className="footer__info">
              <p className="footer__title">ПОЛЕЗНОЕ</p>
              <a href="#" className="footer__link">
                <p className="footer__text">Оплата и доставка</p>
              </a>
              <a href="#" className="footer__link">
                <p className="footer__text">Условия возврата</p>
              </a>
              <a href="#" className="footer__link">
                <p className="footer__text">Бонусная система</p>
              </a>
            </div>
            <div className="footer__buyer">
              <p className="footer__title">ПОКУПАТЕЛЮ</p>
              <a href="#" className="footer__link">
                <p className="footer__text">Избранное</p>
              </a>
              <a href="#" className="footer__link">
                <p className="footer__text">Публичная оферта</p>
              </a>
              <a href="#" className="footer__link">
                <p className="footer__text">Политика конфиденциальности</p>
              </a>
            </div>
            <div className="footer__contacts">
              <p className="footer__title">КОНТАКТЫ</p>
              <div className="footer__block-social">
                <a href="#" className="footer__social-link">
                  <img src={instagram} alt="icon" className="footer__social-img" />
                </a>
                <a href="#" className="footer__social-link">
                  <img src={telegram} alt="icon" className="footer__social-img" />
                </a>
              </div>
              <a href="#" className="footer__link">
                <p className="footer__text">+38(073) 096 36 44</p>
              </a>
              <a href="#" className="footer__link">
                <p className="footer__text">info@yanki.com</p>
              </a>
            </div>
          </div>
          <p className="footer__copy">©️ 2021 Yanki. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
