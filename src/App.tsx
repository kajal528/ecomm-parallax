import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Sales from './components/Sales';
import Category from './components/Category';
import NewArrivals from './components/NewArrivals';
import Occasions from './components/Occasions';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  useEffect(()=>{
     document.body.classList.add('dark');

  },[])

  return (
   <>
   <NavBar/>
   <Hero/>
   <Sales/>
   <Category/>
   <NewArrivals/>
   <Occasions/>
   <Subscribe/>
   <Footer/>
   </>
  )
}

export default App
