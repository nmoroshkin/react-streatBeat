import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/img/logo.svg';
import cartImage from '../assets/img/cart.svg';
import profile from '../assets/img/profile.svg';
import favorites from '../assets/img/favorites.svg';

const Header = ({ onClickCart, items }) => {
    const cart = useSelector(({ cart }) => cart.cart);
    const amount = cart.reduce((sum, item) => sum + item.price, 0);

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
                    <img className="cart__img" src={cartImage} alt="" />
                    {cart.length > 0 ? <span className="cart__price">{amount} руб.</span> : null}
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

export default React.memo(Header);
