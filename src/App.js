import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout';
import ItemList from './components/ItemList/ItemList';
import Card from './components/Card/Card';


const App = () =>{

    const saludo = "Welcome, Cordoba enthusiasts!";

    const onAdd = () =>{
        console.log("Producto agregado");
    }

    return (
    <>
    <Layout>
        <Navbar/>
        <ItemListContainer saludo={saludo} onAdd = {onAdd}/>
        <Footer />
    </Layout>
    </>
    );
    }

 export default App