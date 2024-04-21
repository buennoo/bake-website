import { MoonStarsFill, SearchHeart, SunFill } from 'react-bootstrap-icons';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header({ switchDarkMode, isDarkMode }) {

    const handleSearch = (event) => {
        event.preventDefault();
    }

    return (
        <header>
            <div class="header-title">
                <Link to="/">bake coze</Link>
            </div>
            <div class="header-aside">
                <button id="dark-mode-button" onClick={switchDarkMode}>
                    {isDarkMode ? <SunFill/> : <MoonStarsFill/>}
                </button>
                <div class="login">
                    <button id="loginButton">Login</button>
                </div>
                <div class="search-container">
                    <form class="search-bar" onSubmit={handleSearch}>
                        <div class="md-form mt-0">
                            <input class="form-control" id="searchBar" type="text" placeholder="Search.." aria-label="Search"/>
                        </div>
                        <button type="submit">
                            <SearchHeart/>
                        </button>
                    </form> 
                </div>
            </div>
        </header>
    );
}