import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="overlay">
                <h1>BeeKeeper</h1>
                <nav>
                    <ul className="nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Catalog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
