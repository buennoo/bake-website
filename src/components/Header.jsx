import { MoonStarsFill, SearchHeart } from 'react-bootstrap-icons';
import '../styles/Header.css'

export default function Header() {
    return (
        <header>
            <div class="header-title">
                <a href="index.html">bake coze</a>
            </div>
            <div class="header-aside">
                <button id="dark-mode-button">
                    <MoonStarsFill/>
                </button>
                <div class="login">
                    <button id="loginButton">Login</button>
                </div>
                <div class="search-container">
                    <form class="search-bar" onsubmit="redirect(event)">
                        <div class="md-form mt-0">
                            <input class="form-control" id="searchBar" type="text" placeholder="Search.." aria-label="Search"/>
                        </div>
                        <button type="submit"><SearchHeart/></button>
                    </form> 
                </div>
            </div>
        </header>
    );
}