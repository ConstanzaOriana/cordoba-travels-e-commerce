import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App = () =>{

    const saludo =  "Welcome, Córdoba enthusiasts!";

    const onAdd = () =>{
        console.log("Producto agregado");
    }

    return (
    <>
    <Layout>
        <Navbar/>
        <ItemListContainer saludo={saludo} onAdd = {onAdd}/>
        <ItemDetailContainer/>
        <Footer />
    </Layout>
    </>
    );
    }

 export default App