import React from 'react';
import Project from '../Project';



//---------template-----------
    // {
    //   name: '', 
    //   description:'', 
    //   image:'', 
    //   technology: [],  
    //   deployedApp:'',
    //   repo:'',
    // },

function Portfolio() {
  const projects = [
    
    {
      name: 'WASTEAWAY', 
      description:'A product waste managing web application which allows business owners to manage their kitchen waste in order to lower their overhead costs and also decrease their carbon footprint.', 
      image: 'wasteaway.JPG', 
      technology: ['Node.js',
        'Express.js',
        'Handlebars.js',
        'MySQL',
        'Sequelize ORM',
        'jQuery',
        'dotenv',],  
      deployedApp: 'https://waste-management-project2.herokuapp.com/',
      repo:'https://github.com/Group05-Project02/waste-management'
    },
    {
      name: 'NUTRIQUOTIENT', 
      description:'A product waste managing web application which allows business owners to manage their kitchen waste in order to lower their overhead costs and also decrease their carbon footprint.', 
      image: 'mainpage.JPG', 
      technology: ['HTML',
        'Zurb Foundation',
        'Javascript',
        'JQuery',
        'Server-Side API',
        ],  
      deployedApp: 'https://foodisfuel.github.io/gp5_project1/',
      repo:'https://github.com/foodisfuel/gp5_project1'
    },
    {
      name: 'Note Taker', 
      description:'This application allows a user to create, save and delete notes to help organize the users day to keep track of tasks that need to be completed. This application use an express backend to save and retrieve note data from a JSON file.', 
      image: 'notetaker.png', 
      technology: ['HTML',
        'Javascript',
        'CSS',
        
        ],  
      deployedApp: 'https://true-mountie-19014.herokuapp.com/',
      repo:'https://github.com/sdpercy/note-taker'
    },
    {
      name: 'Budget Tracker', 
      description:'Budget track able to track withdrawals and deposits with or without a data/internet connection SO THAT my account balance is accurate when I am traveling', 
      image: 'budgetracker.png', 
      technology: ['Node.js',
        'Express',
        'MongoDB',
        'Mongoose',
        ],  
      deployedApp: 'https://dry-shelf-29380.herokuapp.com/',
      repo:'https://github.com/sdpercy/pwa-budget-tracker'
    },
    {
      name: 'Weather Dashboard', 
      description:'Weather application to search for cities and get current weather, 5 day forcast and UV index.', 
      image: 'weatherdashboard.png', 
      technology: ['HTML',
        'Bootstrap',
        'jQuery',
        'Javascript',
        'Open Weather API'
        ],  
      deployedApp: 'https://sdpercy.github.io/weather-dashboard/',
      repo:'https://github.com/sdpercy/weather-dashboard'
    },
    {
      name: 'Run-Buddy', 
      description:'A website that offers fitness training services.', 
      image: 'run_buddy_website.jpg', 
      technology: ['HTML',
        'CSS'
        ],  
      deployedApp: 'https://lernantino.github.io/run-buddy/',
      repo:'https://github.com/sdpercy/run-buddy'
    }
  ];
  return (
    <section>
        <ul className="flex-row">
          <li>
            <Project projects={projects[0]}></Project>
          </li>
          <li>
            <Project projects={projects[1]}></Project>
          </li> 
        </ul>
        <ul className="flex-row">
          <li>
            <Project projects={projects[2]}></Project>
          </li>
          <li>
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row">
          <li>
            <Project projects={projects[4]}></Project>
          </li>
          <li>
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
    </section>
  );
}

export default Portfolio;