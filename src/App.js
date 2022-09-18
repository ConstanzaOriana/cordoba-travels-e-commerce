import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/header/header';
import Footer from './components/footer/footer';
import CartProvider from './context/CartContext';


const App = () =>{

    return (
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Layout/>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
    );
};

 export default App;