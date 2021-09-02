import React from 'react';

function Nav(props) {
  const { setCurrentCategory, currentCategory} = props;
  return (
      <nav>
        <ul className="flex-row">
          <li className= {currentCategory === "about" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentCategory("about")}> About me </span>
          </li>
          <li className= {currentCategory === "portfolio" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentCategory("portfolio")}> Portfolio </span>
          </li>
          <li className= {currentCategory === "contact" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentCategory("contact")}> Contact </span>
          </li>
          <li className= {currentCategory === "resume" ? "mx-2 navActive" : "mx-2"}>
            <span onClick={() => setCurrentCategory("about")}> Resume </span>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;