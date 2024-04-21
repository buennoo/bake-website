import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Home from "./pages/Home";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Recipe from './pages/Recipe';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getDarkMode = () => {
    // try catch
    try {
      if(localStorage.getItem('darkMode') !== null) {
        const getDark = localStorage.getItem('darkMode');
        const dark = JSON.parse(getDark);
        setDarkMode(dark);
      }
    } catch (err) {
      console.error('darkMode not found in localStorage ',err)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(previous => {
      const newMode = !previous;
      try {
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        return newMode;
      } catch (err) {
        console.error('Not able to set item in local Storage ', err);
      }
      return previous;
    });
  };

  useEffect(() => {
    getDarkMode();
  }, [])


  return (
      <div className="page-wrap">
        <Header switchDarkMode={toggleDarkMode} isDarkMode={darkMode} />
        <Navbar />
        <Main>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
              {/* temporary */}
              <Route path="/recipe" element={<Recipe />}/>
            </Routes>
        </Main>
        <Footer />
      </div>
  );
}

export default App;
