import React from 'react';
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom';

const Layout = () => {

  const saludo =  "Welcome, Córdoba enthusiasts!";

  const onAdd = () =>{
      console.log("Producto agregado");
  }

  return (
    
    <Routes>
        <Route path='/' element={<ItemListContainer saludo={saludo} onAdd = {onAdd}/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/detail' element={<ItemDetailContainer/>}/>    
    </Routes>
  )
}

export default Layout;