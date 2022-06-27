import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';

import { addSneakersToCart, removeSneakersFromCart } from '../redux/slices/cartSlice';
import { addFavorite, removeFavorite, fetchFavorite } from '../redux/slices/favoritesSlice';

const Favorites = () => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);
    const items = useSelector(({ favorites }) => favorites.favorites);

    React.useEffect(() => {
        dispatch(fetchFavorite());
    }, []);

    const added = (id) => {
        return cart.some((item) => item.parentId === id);
    };
    const favorited = (id) => {
        return items.some((item) => item.parentId === id);
    };

    const handleAddSneakersToCart = async (obj) => {
        try {
            if (cart.find((item) => item.id === obj.parentId)) {
                dispatch(removeSneakersFromCart(obj.id));
                await axios.delete(`/cart/${obj.id}`);
                return false;
            }
            await axios.post('/cart', obj);
            dispatch(addSneakersToCart(obj));
        } catch (err) {
            console.log(err.name);
        }
    };

    const handleAddToFavorite = async (obj) => {
        try {
            if (items.find((item) => item.id === obj.id)) {
                dispatch(removeFavorite(obj.id));
                await axios.delete(`/favorites/${obj.id}`);
                return false;
            }
            dispatch(addFavorite(obj));
            await axios.post('/favorites', obj);
        } catch (err) {
            console.log(err.name);
        }
    };

    return (
        <div className="content">
            <div className="content__header">
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        favorited={favorited}
                        onClickAddSneaker={handleAddSneakersToCart}
                        onClickFavorite={handleAddToFavorite}
                        added={added}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
