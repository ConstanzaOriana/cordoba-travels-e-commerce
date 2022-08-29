import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout';
import ItemCount from './components/ItemCount/ItemCount';

const App = () =>{

    const saludo = "Welcome, Cordoba enthusiasts!";

    const onAdd = () =>{
        console.log("Producto agregado");
    }

    return (
    <>
    <Layout>
        <Navbar/>
        <ItemListContainer saludo={saludo}/>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        <Footer />
    </Layout>
    </>
    );
    }

 export default App