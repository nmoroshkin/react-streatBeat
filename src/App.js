import axios from 'axios';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';
import { Home, Orders, Favorites } from './pages';

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get('/sneakers').then(({ data }) => setItems(data));
        setIsLoading(false);
    }, []);

    const onOpenCart = () => {
        setCartOpened(true);
    };

    const onCloseCart = () => {
        setCartOpened(false);
    };

    return (
        <div className="wrppaer">
            <Drawer opened={cartOpened} onClose={onCloseCart} />
            <Header onClickCart={onOpenCart} />
            <Routes>
                <Route path="/" element={<Home isLoading={isLoading} items={items} />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </div>
    );
}

export default App;
