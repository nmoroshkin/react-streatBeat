import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import search from '../assets/img/search.svg';

import Card from '../components/Card';
import LoadingCard from '../components/Card/LoadingCard';

import { fetchSneakers } from '../redux/actions/sneakers';
import { addSneakersToCart, removeSneakersFromCart } from '../redux/actions/cart';
import { addFavorite, removeFavorite, fetchFavorite } from '../redux/actions/favorites';

const Home = ({ searchValue, onSearchValue }) => {
    const dispatch = useDispatch();
    const cart = useSelector(({ cart }) => cart.cart);
    const items = useSelector(({ sneakers }) => sneakers.items);
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
            if (favorites.find((item) => item.id === obj.id)) {
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

    const renderItems = () => {
        const filteredItem = items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return isLoaded
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

{
    /* {!isLoading
                    ? items.map((item) => (
                          <Card
                              key={item.id}
                              loading={isLoading}
                              onPlus={(obj) => addToCart(obj)}
                              onFavorite={(obj) => onAddToFavorite(obj)}
                              {...item}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <LoadingCard key={index} />)} */
}
