import React from 'react';

import arrow from '../../assets/img/arrow.svg';
import deleteBtn from '../../assets/img/delete.svg';

import style from './Drawer.module.scss';

const Drawer = ({ opened, onClose }) => {
    return (
        <div className={`${style.overlay} ${opened ? style.overlayVisible : ''}`}>
            <div className={style.drawer}>
                <h2>
                    Корзина
                    <button onClick={() => onClose()}>
                        <img src={deleteBtn} alt="" />
                    </button>
                </h2>
                <div className={style.items}>
                    <div className={style.cartItem}>
                        <img className={style.sneakers} src="" alt="" />
                        <div className={style.desc}>
                            <p>Мужские кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className={style.cartItemButton}>
                            <img src={deleteBtn} alt="" />
                        </button>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="total">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="tax">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заказ <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
