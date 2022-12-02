import './App.scss';
import Add from './components/Add';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <>
      <Navbar/>
      <Add/>
      <Hero/>
      <Products/>
      <Deals/>
     <Footer/>
    </>
  );
}

export default App;
