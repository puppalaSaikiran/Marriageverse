import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CardSection from './components/CardSection';
import Pics from './components/pics';
import Cards from './components/cards'
import Perfect from './components/perfect'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
       <HeroSection />
      <FeatureSection />
      <CardSection />
      <Pics/>
      <Cards/>
      <Perfect/>
      <Footer />
    </div>
  );
}

export default App;
