import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './componants/home';
import Product from './componants/product';
import Cart from './componants/cart';
import Profile from './componants/profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;