import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const { currentCategory, setCurrentCategory } = props;

    return (
        <header>
            <div>
                <h2>Scott's Portfolio</h2>
            </div>
            <div>
                <Nav currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Nav>
            </div>
        </header>
    );
}

export default Header;