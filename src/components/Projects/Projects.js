import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fixco from "../../Assets/Projects/fixco_desktop.png";
import umusic from "../../Assets/Projects/umusic.png";
import remuneration from "../../Assets/Projects/remuneration.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umusic}
              isBlog={false}
              title="uMusic"
              description="Personal music player have a very wide field of application.They are portable digital music players software that play music as audio files, such as MP3. Have features which allows user for realtime playing Songs."
              ghLink="https://github.com/Ujwalgulhane"
              demoLink="https://ujwalgulhane.github.io/react-ujwalportfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={remuneration}
              isBlog={false}
              title="Remuneration Software"
              description="Remuneration Software build with Python Tkinter Module and MySql database. It generates bills.It stored transactions of payments, Also update the faculty name, basics task like add, update, delete. It provides database backup schedule specification. Bills are used in all places where services or products are provided and they usually contain a list of charges for the services or products rendered "
              description1 = "Group Members: "
              description2 = "Vivek Harwani | Ujjwal Gulhane"
              description3 = "Himanshu Kharkar | Om Kolhe"
              description4 = "Abhishek Bodkhe"
          
              ghLink="https://github.com/Ujwalgulhane"
              demoLink="https://ujwalgulhane.github.io/react-ujwalportfolio/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fixco}
              isBlog={false}
              title="Fixco.IN"
              description="FiXCO.in Ltd One Of The Leading Repairing Services Providing In Amravati. This website build with html5, css, javascript, php and MySQL database. Welcome To Amravati The City Of Love And Joy, FiXCO.in Ltd Try To Provide Services In All Over Amravati Local Area And Address, Hope You All Are Enjoying Services."
              description1 = "Contribution by : "
              description2 = "Shreyash Isal (Founder & CEO of fixco.in)"
              description3 = "Ujjwal Gulhane"
              ghLink="https://github.com/Ujwalgulhane"
              demoLink="https://fixco.000webhostapp.com/"              
            />
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
