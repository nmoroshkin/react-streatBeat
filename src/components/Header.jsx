import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import cart from '../assets/img/cart.svg';
import profile from '../assets/img/profile.svg';
import favorites from '../assets/img/favorites.svg';

const Header = ({ onClickCart }) => {
    return (
        <header className="header">
            <div className="header__main">
                <Link to="/">
                    <img className="header__main-logo" src={logo} alt="" />
                </Link>
                <div className="header__main-info">
                    <h3 className="info__title">React Sneakers</h3>
                    <p className="info__text">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header__status">
                <li onClick={() => onClickCart()} className="header__status-cart">
                    <img className="cart__img" src={cart} alt="" />
                    <span className="cart__price">1205 руб.</span>
                </li>
                <li className="header__status-likeprofile">
                    <Link to={'/favorites'}>
                        <img src={favorites} alt="" className="likeprofile__favourites" />
                    </Link>
                    <Link to="/orders">
                        <img src={profile} alt="" className="likeprofile__profile" />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
