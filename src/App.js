import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from './context';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Home, Orders, Favorites } from './pages';

function App() {
    const [items, setItems] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [responseItems, responseCart] = await Promise.all([
                    axios.get('/sneakers'),
                    axios.get('/cart'),
                ]);

                setItems(responseItems.data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const onOpenCart = () => {
        setCartOpened(true);
    };

    const onCloseCart = () => {
        setCartOpened(false);
    };

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => item.id === obj.id)) {
            setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
            return false;
        }
        // setCartItems([...cartItems, obj]);
        setCartItems((perv) => {
            return [...perv, obj];
        });
    };

    const onRemoveItem = (id) => {
        setCartItems((prev) => prev.filter((obj) => obj.id !== id));
    };

    const onAddToFavorite = (obj) => {
        if (favorites.find((item) => item.id === obj.id)) {
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            return false;
        }
        setFavorites([...favorites, obj]);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => obj.id === id);
    };

    return (
        <AppContext.Provider value={isItemAdded}>
            <div className="wrppaer">
                <Drawer
                    items={cartItems}
                    opened={cartOpened}
                    onClose={onCloseCart}
                    onRemoveItem={onRemoveItem}
                />
                <Header onClickCart={onOpenCart} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                items={items}
                                isLoading={isLoading}
                                addToCart={onAddToCart}
                                onAddToFavorite={onAddToFavorite}
                            />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
                    />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
