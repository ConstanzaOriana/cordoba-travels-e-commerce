import Navbar from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Layout from './components/Layout';

const App = () =>{
    return (
    <>
    <Layout>
        <Navbar/>
        <Main/>
        <Footer />
    </Layout>
    </>
    );
    };

 export default App;