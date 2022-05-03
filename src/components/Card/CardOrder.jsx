import React from 'react';

import styles from './Card.module.scss';

const CardOrder = ({ id, price, imageUrl, name }) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={imageUrl} alt="" />
            <p className={styles.text}>{name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
            </div>
        </div>
    );
};

export default CardOrder;
