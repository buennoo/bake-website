import React from 'react';
import '../styles/Home.css';
import cheesecakeImage from '../assets/images/cheesecake.jpg';
import brownieImage from '../assets/images/brownie.jpg';
import applePieImage from '../assets/images/applepie.jpg';
import poundcakeImage from '../assets/images/poundcake.jpg';
import brownieTrImage from '../assets/brownie_tr2.png';
import cakeTrImage from '../assets/cake_tr.png';
import cheesecakeTrImage from '../assets/cheesecake_tr.png';
import cupcakeTrImage from '../assets/cupcake_tr.png';

/*
TO-DO
delete hrefs
*/


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
                <a href="recipes\vanilla-pound-cake.html">
                    <img src={poundcakeImage} alt="Pound Cake" class="rounded"/>
                    <div class="category-name">Else</div>
                </a>
            </section>
        </div>
        <div class="main-best">
            <section class="best">
                <div class="background">
                    <h3>All time favourites</h3>
                </div>
                <div class="category-best">
                    <a href="#">
                        <img src={brownieTrImage} class="turn-right"/>
                    </a>
                    <a href="#">
                        <img src={cakeTrImage} class="turn-left"/>
                    </a>
                    <a href="#">
                        <img src={cheesecakeTrImage} class="turn-right"/>
                    </a>
                    <a href="#">
                        <img src={cupcakeTrImage} class="turn-left"/>
                    </a>
                </div>
            </section>
        </div>
        </>
    );
}