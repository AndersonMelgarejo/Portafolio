import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GInventario from "../../Assets/Projects/GestorDeInventario.png";
import GInformatico from "../../Assets/Projects/GestorInformatico.png";
import Urban from "../../Assets/Projects/Urbann.png";
import inv from "../../Assets/Projects/inventario.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Urban}
              isBlog={false}
              title="UrbanFeet"
              description="Sneaker website built with HTML, CSS, and JavaScript. Uses localStorage to manage data and includes a shopping system. I was responsible for most of the JavaScript, including the cart logic and dynamic interactions."
              ghLink="https://github.com/AndersonMelgarejo/UrbanFeet.git"
              demoLink="https://andersonmelgarejo.github.io/UrbanFeet/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inv}
              isBlog={true}
              title="Gestor-de-Inventario"
              description="Inventory system developed in Java, using XAMPP in a local environment, where I learned to integrate MySQL with Java to perform efficient database queries and manage records seamlessly."
              ghLink="https://github.com/AndersonMelgarejo/inventario-de-Zapatillas.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GInformatico}
              isBlog={true}
              title="Gestor-Informatico"
              description="IT incident management software for businesses, developed in Java as a group project using GitHub. Data persistence is handled in binary, allowing efficient storage and management of incident records."
              ghLink="https://github.com/AndersonMelgarejo/Software-de-gesti-n-de-incidencias-Inform-ticas.git"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GInventario}
              isBlog={true}
              title="Gestor-De-Productos"
              description="Sneaker product manager in CRUD format, currently under development in Java. It uses MySQL on AWS for the database and is connected to a Cloudinary API to manage product photos."
              ghLink="https://github.com/AndersonMelgarejo/Software-Gestor"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
