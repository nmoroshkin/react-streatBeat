import React from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import plus from '../../assets/img/plus.svg';
import check from '../../assets/img/check.svg';
import heart from '../../assets/img/heart-unlike.svg';
import heartLike from '../../assets/img/heart-like.svg';

import styles from './Card.module.scss';

const Card = ({ id, imageUrl, name, price, onPlus, favorited = false, onFavorite }) => {
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const obj = { id, imageUrl, name, price };
    const isItemAdded = React.useContext(AppContext);

    const onAddToCart = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <button
                onClick={onClickFavorite}
                className={isFavorite ? styles.heart + ' ' + `${styles.liked}` : styles.heart}
            >
                <img src={isFavorite ? heartLike : heart} alt="" />
            </button>
            <img className={styles.image} src={imageUrl} alt="" />
            <p className={styles.text}>{name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button
                    onClick={onAddToCart}
                    className={
                        isItemAdded(id) ? styles.button + ' ' + `${styles.added}` : styles.button
                    }
                >
                    <img src={isItemAdded(id) ? check : plus} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Card;
