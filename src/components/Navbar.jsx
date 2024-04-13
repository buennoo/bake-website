import '../styles/Navbar.css';

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
                        <li><a href="recipes.html">Recipes</a></li>
                    </button>
                    <div class="recipes-content">
                        <ul>
                            <li>
                                <a href="category\cake.html">Cakes</a>
                                <a href="#">Sponge cakes</a>
                                <a href="#">Shortcrust cakes</a>
                                <a href="#">Yeast cakes</a>
                                <a href="#">Cheesecakes</a>
                                <a href="#">Brownies</a>
                                <a href="#">Cookies</a>
                                <a href="#">Cupcakes</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <li><a href="#">Categories</a></li>
                    </button>
                    <div class="recipes-content">
                        <ul>
                            <li>
                                <a href="#">Ocassions</a>
                                <a href="#">Fruit cakes</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <li><a href="#">Filter</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    );
}