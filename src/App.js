import React from 'react';
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
  return (
      <div className="page-wrap">
        <Header />
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
