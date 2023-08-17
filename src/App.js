import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer';
import Cart from './components/cart';
import {CartProvider} from './context/cartcontext';
import Footer from './components/footer';
import Checkout from './components/checkout.js';

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
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
