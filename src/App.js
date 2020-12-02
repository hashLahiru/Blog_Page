// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Image from './components/Image/Image';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Carousel/>
      <br/><br/><br/>
      <Image/>
      <br/><br/>
      <button type="button" class="btn btn-primary">Add Post</button>
      <br/><br/>
      <Cards/>
      <br/><br/>
      <button type="button" class="btn btn-primary">Add Articles</button>
      <br/><br/><br/>
      <Footer/>


      
    </div>
  );
}

export default App;
