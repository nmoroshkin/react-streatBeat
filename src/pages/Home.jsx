import React from 'react';

import search from '../assets/img/search.svg';

import Card from '../components/Card';
import LoadingCard from '../components/Card/LoadingCard';

const Home = ({ items, isLoading, addToCart, onAddToFavorite }) => {
    // const renderItems = () => {
    //     return isLoading
    //         ? [...Array(8)]
    //         : items.map((item) => (
    //               <Card
    //                   key={item.id}
    //                   loading={isLoading}
    //                   onPlus={(obj) => addToCart(obj)}
    //                   onFavorite={(obj) => onAddToFavorite(obj)}
    //                   {...item}
    //               />
    //           ));
    // };
    return (
        <div className="content">
            <div className="content__header">
                <h1>Все кроссовки</h1>
                <div className="search">
                    <img src={search} alt="search" />
                    <input type="text" placeholder="Поиск..." />
                </div>
            </div>
            <div className="sneakers">
                {!isLoading
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
                          .map((_, index) => <LoadingCard key={index} />)}
            </div>
        </div>
    );
};

export default Home;
