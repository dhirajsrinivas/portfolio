import { useState } from "react";
import "../App.css"; 
import mediConnect from "../assets/mediConnect.jpg";
import mediConnect2 from "../assets/mediConnect2.png"
import portfolio1 from "../assets/portfolio1.png"
import portfolio2 from "../assets/portfolio2.png"
import lms1 from  "../assets/lms1.png"
import lms2 from "../assets/lms2.png"
 // Ensure App.css is inside the src directory

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MediConnect",
      description: "A hospital management web application designed to enhance the patient experience.",
      technologies: "HTML, CSS, Node.js, Express, Bootstrap, PostgreSQL",
      image1:mediConnect,
      image2:mediConnect2
      
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my web development journey and projects.",
      technologies: "React, CSS, Node.js",
      image1:portfolio1,
      image2:portfolio2
    },
    {
      title:"Library Management system",
      description: " Library management system with user authentication which enables librarian to perform CRUD operations ,while students can only view books .",
      technologies: "Ejs, CSS, Node.js,Express, Bootstrap, PostgreSQL ",
      image1:lms1,
      image2:lms2
    }
    // Add more projects here
  ];

  return (
    <div className="projects-section">
      <h2 className="heading2">Projects</h2>
      
      {/* Buttons to select projects */}
      <div className="project-buttons">
        {projects.map((project, index) => (
          <button 
            key={index} 
            className="project-button" 
            onClick={() => setSelectedProject(project)}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* Display selected project details */}
      {selectedProject && (
        <div className="project-details">
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <p><strong>Technologies Used:</strong> {selectedProject.technologies}</p>
          {selectedProject.image1 && (
            <img 
              src={selectedProject.image1} 
              alt={selectedProject.title} 
              className="project-image"
            />
          )}
          <br />
          {selectedProject.image2 && (
            <img 
              src={selectedProject.image2} 
              alt={selectedProject.title} 
              className="project-image"
            />
          )}
          </div>
      )}
    </div>
  );
}
