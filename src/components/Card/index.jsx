import React from 'react';

import check from '../../assets/img/check.svg';
import heart from '../../assets/img/heart-unlike.svg';

import styles from './Card.module.scss';

const Card = ({ id, imageUrl, name, price }) => {
    return (
        <div className={styles.card}>
            <button className={styles.heart}>
                <img src={heart} alt="" />
            </button>
            <img className={styles.image} src={imageUrl} alt="" />
            <p className={styles.text}>{name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className={styles.button}>
                    <img src={check} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Card;
