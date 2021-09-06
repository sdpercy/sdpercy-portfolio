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
    }
  ];
  return (
    <section>
        <ul className="flex-row">
          <li>
            <Project projects={projects[0]}></Project>
          </li>
          {/* <li>
            <Project projects={projects[1]}></Project>
          </li> */}
        </ul>
        {/* <ul className="flex-row">
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
        </ul> */}
    </section>
  );
}

export default Portfolio;