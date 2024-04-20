import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import cheesecakeImage from '../assets/images/cheesecake.jpg';
import brownieImage from '../assets/images/brownie.jpg';
import applePieImage from '../assets/images/applepie.jpg';
import poundcakeImage from '../assets/images/poundcake.jpg';
import brownieTrImage from '../assets/brownie_tr2.png';
import cakeTrImage from '../assets/cake_tr.png';
import cheesecakeTrImage from '../assets/cheesecake_tr.png';
import cupcakeTrImage from '../assets/cupcake_tr.png';

export default function Home() {
    return (
        <>
        <div class="main-categories">
            <section class="category">
                <img src={cheesecakeImage} alt="Cheesecake" class="rounded"/>
                <div class="category-name">Cheesecakes</div>
            </section>
            <section class="category">
                <img src={brownieImage} alt="Brownie" class="rounded"/>
                <div class="category-name">Brownies</div>
            </section>
            <section class="category">
                <img src={applePieImage} alt="Apple Pie" class="rounded"/>
                <div class="category-name">Apple Pies</div>
            </section> 
            <section class="category">
                <Link to="#">
                    <img src={poundcakeImage} alt="Pound Cake" class="rounded"/>
                    <div class="category-name">Else</div>
                </Link>
            </section>
        </div>
        <div class="main-best">
            <section class="best">
                <div class="background">
                    <h3>All time favourites</h3>
                </div>
                <div class="category-best">
                    <Link to="#">
                        <img src={brownieTrImage} alt="Brownie" class="turn-right"/>
                    </Link>
                    <Link to="#">
                        <img src={cakeTrImage} alt="Cake" class="turn-left"/>
                    </Link>
                    <Link to="#">
                        <img src={cheesecakeTrImage} alt="Cheesecake" class="turn-right"/>
                    </Link>
                    <Link to="#">
                        <img src={cupcakeTrImage} alt="Cupcake" class="turn-left"/>
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
}