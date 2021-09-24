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
      name: 'Lets Eat A Deal', 
      description:'This is a full-stack web application built using a MERN stack that connects small grocery store vendors to customers in order to help vendors sell soon-to-be expired groceries at discounted prices to customers. Small grocery stores may not be able to sell groceries on time which leads to financial loss and food wastage. Consequently, we developed an application that will bring these soon-to-be expired foods to the attention of customers which can enhance the foods’ sales at discounted prices, hence saving customers money on grocery shopping and preventing food wastage.', 
      image: 'letseatadeal.png',  
      technology: ['HTML','CSS','Bulma','JS','React','Heroku','Node.js','Express.js','MongoDB','Mongoose ODM','MongoDB Atlas','GraphQL','JWT','Stripe',
        
        ],  
      deployedApp:'https://lets-eat-a-deal.herokuapp.com/',
      repo:'https://github.com/zoomzooom6/project-three-fullstack'
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