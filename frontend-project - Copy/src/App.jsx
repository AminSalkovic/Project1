import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Footer/>
      <div style={{height:"200px"}}></div>
    </div>
  );
}

export default App;
