import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';
import { Home, Orders, Favorites } from './pages';

function App() {
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    const onOpenCart = React.useCallback(() => {
        setCartOpened(true);
    }, [cartOpened]);

    const onCloseCart = () => {
        setCartOpened(false);
    };

    const onSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <div className="wrppaer">
            <Drawer opened={cartOpened} onClose={onCloseCart} />
            <Header onClickCart={onOpenCart} />
            <Routes>
                <Route
                    path="/"
                    element={<Home searchValue={searchValue} onSearchValue={onSearchValue} />}
                />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </div>
    );
}

export default App;
