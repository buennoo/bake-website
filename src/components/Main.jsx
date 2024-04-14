import React from 'react';
import '../styles/Main.css';


export default function Main({ children }) {
    return (
        <main>
            <section className='main-content'>
                {children}
            </section>
        </main>
    );
}