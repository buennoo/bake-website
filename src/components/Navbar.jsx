import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

/* 
TO-DO
change the nav dropdown, delete hrefs
*/

export default function Navbar() {
    return (
        <nav>
            <ul>
                <div class="dropdown">
                    <button class="dropbtn">
                        <li><Link to="#">Recipes</Link></li>
                    </button>
                    <div class="recipes-content">
                        <ul>
                            <li>
                                <Link to="#">Cakes</Link>
                                <Link to="#">Sponge cakes</Link>
                                <Link to="#">Shortcrust cakes</Link>
                                <Link to="#">Yeast cakes</Link>
                                <Link to="#">Cheesecakes</Link>
                                <Link to="#">Brownies</Link>
                                <Link to="#">Cookies</Link>
                                <Link to="#">Cupcakes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <li><Link to="#">Categories</Link></li>
                    </button>
                    <div class="recipes-content">
                        <ul>
                            <li>
                                <Link to="#">Ocassions</Link>
                                <Link to="#">Fruit cakes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <li><Link to="#">Filter</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}