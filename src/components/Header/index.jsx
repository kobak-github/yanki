import React from 'react';
import logo from '../../assets/img/logo.svg';
import search from '../../assets/img/icon/search.svg';
import clear from '../../assets/img/icon/close.svg';
import user from '../../assets/img/icon/user.svg';
import favorite from '../../assets/img/icon/favorite.svg';
import cart from '../../assets/img/icon/cart.svg';
import { Link } from 'react-router-dom';
import { setSearchValue } from '../../redux/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__icon-catalog">
            <div className="header__icon-top"></div>
            <div className="header__icon-center"></div>
            <div className="header__icon-bottom"></div>
          </div>
          <ul className="header__nav-lists">
            <a href="#" className="header__nav-link">
              <li className="header__nav-list">NEW</li>
            </a>
            <a href="#" className="header__nav-link">
              <li className="header__nav-list">каталог</li>
            </a>
            <a href="#" className="header__nav-link">
              <li className="header__nav-list">о нас</li>
            </a>
          </ul>
          <Link to="/" className="header__logo-link">
            <img src={logo} alt="logo" className="header__logo-img" />
          </Link>
          <div className="header__search-block">
            <img src={search} alt="search" className="header__search-img" />
            <input
              type="text"
              value={searchValue}
              onChange={(event) => dispatch(setSearchValue(event.target.value))}
              placeholder="Введите ваш запрос"
            />
            {searchValue && (
              <img
                src={clear}
                alt="clear"
                onClick={() => dispatch(setSearchValue(''))}
                className="header__search-clear"
              />
            )}
          </div>
          <div className="header__icon-block">
            <a href="#" className="header__icon-link">
              <img src={user} alt="" className="header__icon-img" />
            </a>
            <a href="#" className="header__icon-link">
              <img src={favorite} alt="" className="header__icon-img" />
            </a>
            <Link to="cart" className="header__icon-link">
              <img src={cart} alt="" className="header__icon-img" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
