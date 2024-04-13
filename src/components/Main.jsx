import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/Main.css';
import Home from './Home';


export default function Main() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />}>    
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}