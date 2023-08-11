import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailcontainer';
import Cart from './components/cart';
import {CartProvider} from './context/cartcontext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
            <Route exact path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
