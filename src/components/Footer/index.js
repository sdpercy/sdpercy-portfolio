import React from 'react';
import linkedIn_logo from '../../assets/logos/linkedIn/LI-In-Bug.png';
import github_logo from '../../assets/logos/github/PNG/GitHub-Mark-Light-32px.png';
import twitter_logo from '../../assets/logos/twitter/PNG/2021 Twitter logo - white.png';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a href="https://github.com/sdpercy" target="_blank" rel="noreferrer">
                    <img src={github_logo} alt="Github" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/scott-percy/" target="_blank" rel="noreferrer">
                        <img src={linkedIn_logo} alt="LinkedIn" className="logo"></img>
                </a>
            </div>
            <div>
            <a href="https://twitter.com/spercy99" target="_blank" rel="noreferrer">
                    <img src={twitter_logo} alt="Twitter" className="logo"></img>
                </a>
            </div>    
        </footer>
    )
    
}
export default Footer;