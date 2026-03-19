import React from "react";
import "../css/projects.css";
import gujrat from "../assets/images/gujrat.png";
import jaipur from "../assets/images/jaipur.png";

function Projects() {

  const projects = [
    {
      name: "100KW Solar Plant",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },
    {
      name: "Industrial Solar Plant",
      location: "Gujarat",
      image: gujrat
    },
    {
      name: "Rooftop Solar",
      location: "Jaipur",
      image: jaipur
    }
  ];

  return (
    <section className="projects" id="projects">
          <h2><span className="highlight-black">Our Solar Projects </span></h2>
     

      <div className="project-grid">

        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.location}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;