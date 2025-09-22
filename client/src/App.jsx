import { Route, Routes } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Categories from './pages/Categories';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Product from './pages/Product';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="search" element={<Search />} />
                    <Route path="products/:id" element={<Product />} />
                    <Route path="categories" element={<Categories />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;