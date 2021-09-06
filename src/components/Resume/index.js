import React from 'react';
import nature_pic from '../../assets/images/nature.jpg';

function Resume () {
    return (
        <section>
            
            <div className="resume_pic">
            <img src={nature_pic} alt="nature" className="nature" />
            <div className="resume_title">
            <a href={require("../../assets/files/final_resume2021_01-20.pdf").default} download>
                    <h2>Download My Resume</h2>
            </a>
            </div>
            </div>
            <div>
                <h3>Front-End Proficiencies</h3>
                <ol>
                    <li>HTML5</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
                    <li>Zurb Foundation</li>
					<li>React</li>
                </ol>
                <h3>Back-End Proficiencies</h3>
                <ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
                <h3>Dev Tool Proficiencies</h3>
                <ol>
                    <li>Git</li>
					<li>npm</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
                <h3>Database Proficiencies</h3>
                <ol>
                    <li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
            </div>

        </section>
    )
}


export default Resume;