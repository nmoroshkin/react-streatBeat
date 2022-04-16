import React from 'react';

import arrow from '../../assets/img/arrow.svg';
import deleteBtn from '../../assets/img/delete.svg';
import emptyArrow from '../../assets/img/emptyArrow.svg';
import emptyCart from '../../assets/img/emptyCart.png';

import styles from './Drawer.module.scss';

const Drawer = ({ opened, onClose, items, onRemoveItem }) => {
    const removeItem = (id) => {
        return onRemoveItem(id);
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2>
                    Корзина
                    <button onClick={() => onClose()}>
                        <img src={deleteBtn} alt="" />
                    </button>
                </h2>
                {items.length !== 0 ? (
                    <div className={styles.itemsWrapper}>
                        <div className={styles.items}>
                            {items.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <img className={styles.sneakers} src={item.imageUrl} alt="" />
                                    <div className={styles.desc}>
                                        <p>{item.name}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className={styles.cartItemButton}
                                    >
                                        <img src={deleteBtn} alt="" />
                                    </button>
                                </div>
                            ))}
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
                ) : (
                    <div className={styles.emptyCart}>
                        <img className={styles.empty} src={emptyCart} alt="" />
                        <h3>Корзина пустая</h3>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className={styles.greenButton}>
                            <img src={emptyArrow} alt="" /> Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;
