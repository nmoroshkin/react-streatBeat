import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fecthCart, removeSneakersFromCart, removeAll } from '../../redux/actions/cart';
import { addOrder } from '../../redux/actions/orders';

import arrow from '../../assets/img/arrow.svg';
import deleteBtn from '../../assets/img/delete.svg';
import emptyArrow from '../../assets/img/emptyArrow.svg';
import emptyCart from '../../assets/img/emptyCart.png';

import styles from './Drawer.module.scss';

const Drawer = ({ opened, onClose }) => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);
    const amount = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = Math.trunc((amount * 5) / 100);

    React.useEffect(() => {
        dispatch(fecthCart());
    }, []);

    const handleOrder = async () => {
        try {
            dispatch(addOrder(cart));
            await axios.post(`/orders/`, {
                items: cart,
            });
            cart.map((item) => axios.delete(`/cart/${item.id}`));
            dispatch(removeAll());
        } catch (err) {
            console.log(err);
        }
    };

    // const onClickOreder = () => {
    //     onCheckOut(items);
    // };

    const removeItem = async (id) => {
        try {
            await axios.delete(`/cart/${id}`);
            dispatch(removeSneakersFromCart(id));
        } catch (err) {
            console.log(err.name);
        }
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
                {cart.length !== 0 ? (
                    <div className={styles.itemsWrapper}>
                        <div className={styles.items}>
                            {cart.map((item) => (
                                <div key={item.parentId} className={styles.cartItem}>
                                    <img className={styles.sneakers} src={item.imageUrl} alt="" />
                                    <div className={styles.desc}>
                                        <p>{item.name}</p>
                                        <b>{item.price} руб.</b>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.parentId)}
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
                                    <b>{amount} руб.</b>
                                </li>
                                <li className="tax">
                                    <span>Доставка 5%:</span>
                                    <div></div>
                                    <b>{tax} руб.</b>
                                </li>
                            </ul>
                            <button onClick={handleOrder} className="greenButton">
                                Оформить заказ <img src={arrow} alt="" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.emptyCart}>
                        <img className={styles.empty} src={emptyCart} alt="" />
                        <h3>Корзина пустая</h3>
                        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={() => onClose()} className={styles.greenButton}>
                            <img src={emptyArrow} alt="" /> Вернуться назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;
