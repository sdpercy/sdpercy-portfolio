import "./App.css";
import React, { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App(){
const [currentCategory, setCurrentCategory] = useState('about');

const category = () => {
  switch (currentCategory) {
    case "about":
      return <About />;
    case "portfolio":
      return <Portfolio />;
    case "contact":
      return <Contact />;
    case "resume":
      return <Resume />;
      default:
        return null;
  }
};


return (
    <div>
        <div>
            <Header currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Header>
        </div>
        <div>
            <main>
              {category()}
            </main>
        </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;

