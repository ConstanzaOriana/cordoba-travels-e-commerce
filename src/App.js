import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/header/header';
import Footer from './components/footer/footer';


const App = () =>{

    return (
    <BrowserRouter>
    <Navbar/>
    <Layout/>
    <Footer/>
    </BrowserRouter>
    );
    }

 export default App;