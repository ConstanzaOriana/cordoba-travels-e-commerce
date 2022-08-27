import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout';
import Counter from './components/Counter/Counter';

const App = () =>{
    
    const saludo = "Welcome, Cordoba travelers!"

    return (
    <>
    <Layout>
        <Navbar/>
        <ItemListContainer saludo={saludo}/>
        <Counter/>
        <Footer />
    </Layout>
    </>
    );

    }
 export default App;