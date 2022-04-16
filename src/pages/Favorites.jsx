import React from 'react';

import Card from '../components/Card';

const Favorites = ({
    items,
    isLoading,
    addToCart,
    isItemAdded,
    isItemFavorite,
    onAddToFavorite,
}) => {
    return (
        <div className="content">
            <div className="content__header">
                <h1>Мои закладки</h1>
            </div>
            <div className="sneakers">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        favorited={true}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
