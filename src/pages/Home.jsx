import React from 'react';

import search from '../assets/img/search.svg';

import Card from '../components/Card';

const Home = ({ items, isLoading }) => {
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
                {!isLoading ? items.map((item) => <Card key={item.id} {...item} />) : null}
            </div>
        </div>
    );
};

export default Home;
