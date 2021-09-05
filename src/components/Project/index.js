import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    const currentProject = useState(props)[0].projects;

    const name = currentProject.name;
    const description = currentProject.description;
    const image = currentProject.image;
    const technology = currentProject.technology;
    const deployedApp = currentProject.deployed;
    const repo = currentProject.github;


    function getTechnology(technologyArray) {
        let technologyList = "";

        for (var i = 0; i < technologyArray.length; i++) {
            if (i === technologyArray.length-1) {
                technologyList += technologyArray[i];
            } else {
                technologyList += technologyArray[i] + " ";
            }
        }
        return technologyList;
    }

    return (
        <Card style={{ width: "15rem"}}>
            <Card.Img variant="top" src={require(`../../assets/images/${image}`)} className="card-image" ></Card.Img>

            <div>
                <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">{description}</Card.Text>
                    <Card.Subtitle className="card-subtitle"> Technology Used</Card.Subtitle>
                    <Card.Text className="card-technology">{getTechnology(technology)}</Card.Text>
                    <Card.Link href={deployedApp} target="_blank" className="card-link"> {name} App </Card.Link>
                    <br></br>
                    <Card.Link href={repo} target="_blank" className="card-link"> {name} Github </Card.Link>
                </Card.Body>

            </div>    
        </Card>
    );
}

export default Project;