import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Home from "./components/Home";
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
      <div className="page-wrap">
        <Header />
        <Navbar />
        <Main>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Main>
        <Footer />
      </div>
  );
}

export default App;
