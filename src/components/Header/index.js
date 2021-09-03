import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentCategory, setcurrentCategory } = props;

    return (
        <header>
            <div>
                <h2>Scott's Portfolio</h2>
            </div>
            <div>
                <Nav 
                currentCategory={currentCategory} setcurrentCategory={setcurrentCategory}>
                </Nav>
            </div>
        </header>
    );
}

export default Header;