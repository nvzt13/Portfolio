import React from 'react';
import { Routes, Route } from 'react-router-dom';
import css from './style/style.css'; 
import Header from './components/Header.js';
import Slider from './components/Slider.js';
import Download from './components/Download.js';
import Services from './components/Services.js';
import Gallery from './components/Gallery.js';
import Footer from './components/Footer.js';
import Form from './components/pages/Form.js';
import About from './components/pages/About.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ 
          <> 
            <Slider />
            <Download />
            <Services /> 
            <Gallery /> 
          </> 
        }> 
        </Route>
        <Route path="/form" element={<Form />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<h1>Page Not Found</h1>} /> 
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
