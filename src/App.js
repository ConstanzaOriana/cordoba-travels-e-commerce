import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout';
import ItemCount from './components/ItemCount/ItemCount';

const App = () =>{

    const saludo = "Welcome, Cordoba travelers!";

    return (
    <>
    <Layout>
        <Navbar/>
        <ItemListContainer saludo={saludo}/>
        <ItemCount stock={10} initial={0} onAdd={console.log("Producto agregado")}/>
        <Footer />
    </Layout>
    </>
    );
    }

 export default App