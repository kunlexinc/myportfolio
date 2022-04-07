import logo from './logo.svg';
import './App.css';

import Header from './components/header/header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experince from './components/experince/experince';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import Testimonials from './components/testimonials/Testimonials';



const App = ()=> {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experince/>
      <Services/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
