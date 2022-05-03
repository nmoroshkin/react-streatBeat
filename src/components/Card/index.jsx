import React from 'react';

import plus from '../../assets/img/plus.svg';
import check from '../../assets/img/check.svg';
import heart from '../../assets/img/heart-unlike.svg';
import heartLike from '../../assets/img/heart-like.svg';

import styles from './Card.module.scss';

const Card = ({
    id,
    imageUrl,
    name,
    price,
    onClickAddSneaker,
    added,
    favorited = true,
    onClickFavorite,
}) => {
    const obj = { id, parentId: id, imageUrl, name, price };
    // const { isItemFavorite } = React.useContext(AppContext);

    const addFavorite = () => {
        onClickFavorite(obj);
    };

    const addSneaker = () => {
        onClickAddSneaker(obj);
    };

    return (
        <div className={styles.card}>
            <button
                onClick={addFavorite}
                className={favorited(id) ? styles.heart + ' ' + `${styles.liked}` : styles.heart}
            >
                <img src={favorited(id) ? heartLike : heart} alt="" />
            </button>
            <img className={styles.image} src={imageUrl} alt="" />
            <p className={styles.text}>{name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.price}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button
                    onClick={addSneaker}
                    className={added(id) ? styles.button + ' ' + `${styles.added}` : styles.button}
                >
                    <img src={added(id) ? check : plus} alt="" />
                </button>
            </div>
        </div>
    );
};

export default React.memo(Card);
