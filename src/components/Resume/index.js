import React from 'react';
import nature_pic from '../../assets/images/nature.jpg';

function Resume () {
    return (
        <section>
            <div>
            <img src={nature_pic} alt="nature" className="nature" />
            <div>
            <a href="https://github.com/sdpercy" target="_blank" rel="noreferrer">
                    My Resume
            </a>
            </div>
            </div>

        </section>
    )
}


export default Resume;