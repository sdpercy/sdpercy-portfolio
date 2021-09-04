import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="https://github.com/sdpercy" target="_blank" rel="noreferrer">
                    <img src={require('../../assets/logos/github/PNG/GitHub-Mark-32px.png')} alt="Github" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/scott-percy/" target="_blank" rel="noreferrer">
                        <img src={require('../../assets/logos/linkedIn/LI-Logo.png')} alt="LinkedIn" className="logo"></img>
                </a>
            </div>
            <div>
            <a href="https://twitter.com/spercy99" target="_blank" rel="noreferrer">
                    <img src={require('../../assets/logos/twitter/PNG/2021 Twitter logo - blue.png')} alt="Twitter" className="logo"></img>
                </a>
            </div>    
        </footer>
    )
    
}
export default Footer;