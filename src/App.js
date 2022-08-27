import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Layout from './components/Layout';
import Counter from './components/Counter/Counter';

const App = () =>{
        return (
    <>
    <Layout>
        <Navbar/>
        <ItemListContainer/>
        <Counter/>
        <Footer />
    </Layout>
    </>
    );

    }
 export default App;