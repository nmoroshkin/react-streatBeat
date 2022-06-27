import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import search from '../assets/img/search.svg';

import Card from '../components/Card';
import LoadingCard from '../components/Card/LoadingCard';

import { fetchSneakers } from '../redux/slices/sneakersSlice';
import { addFavorite, removeFavorite, fetchFavorite } from '../redux/slices/favoritesSlice';
import { addSneakersToCart, removeSneakersFromCart } from '../redux/slices/cartSlice';

const Home = ({ searchValue, onSearchValue }) => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);
    const { items, status } = useSelector(({ sneakers }) => sneakers);
    const isLoaded = useSelector(({ sneakers }) => sneakers.isLoaded);
    const favorites = useSelector(({ favorites }) => favorites.favorites);

    React.useEffect(() => {
        dispatch(fetchSneakers());
        dispatch(fetchFavorite());
    }, []);

    const added = (id) => {
        return cart.some((item) => item.parentId === id);
    };

    const favorited = (id) => {
        return favorites.some((item) => item.parentId === id);
    };

    const handleAddSneakersToCart = (obj) => {
        try {
            if (cart.find((item) => item.id === obj.parentId)) {
                dispatch(removeSneakersFromCart(obj.id));
                axios.delete(`/cart/${obj.id}`);
            } else {
                axios.post('/cart', obj);
                dispatch(addSneakersToCart(obj));
            }
        } catch (err) {
            console.log(err.name);
        }
    };

    const handleAddToFavorite = (obj) => {
        try {
            if (favorites.find((item) => item.id === obj.parentId)) {
                dispatch(removeFavorite(obj.id));
                axios.delete(`/favorites/${obj.id}`);
            } else {
                dispatch(addFavorite(obj));
                axios.post('/favorites', obj);
            }
        } catch (err) {
            console.log(err.name);
        }
    };

    const renderItems = () => {
        const filteredItem = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return status !== 'loading'
            ? filteredItem.map((item) => (
                  <Card
                      key={item.id}
                      onClickFavorite={handleAddToFavorite}
                      favorited={favorited}
                      onClickAddSneaker={handleAddSneakersToCart}
                      added={added}
                      {...item}
                  />
              ))
            : Array(12)
                  .fill(0)
                  .map((_, index) => <LoadingCard key={index} />);
    };

    return (
        <div className="content">
            <div className="content__header">
                <h1>Все кроссовки</h1>
                <div className="search">
                    <img src={search} alt="search" />
                    <input
                        onChange={onSearchValue}
                        value={searchValue}
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
            </div>
            <div className="sneakers">{renderItems()}</div>
        </div>
    );
};

export default Home;
