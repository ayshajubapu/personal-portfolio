import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Job Api",
      description: "This project is built using react js,tailwind css.when user will type job designation in chatbox api will provide data to user and project is in responsive form.",
      imgUrl: projImg1,
    },
    {
      title: "Product Landing Page",
      description: "Product landing pages is built using Html,css and javascript and gsap animation library of javascript .when the user scroll project animation will start this project is responsive.",
      imgUrl: projImg2,
    },
    {
      title: "Meet'n'Eat",
      description: "Meet n Eat is a cafeteria website  built using react js and gsap animation library of javacript and various tech stack . When user click on book a table it open seprate window and site is responsive.",
      imgUrl: projImg3,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Frontend Technologies:

HTML5 & CSS3: Proficient in crafting structured, responsive layouts with modern styling techniques.
JavaScript (ES6+): Strong grasp of advanced JavaScript features, including asynchronous programming and modern syntax.
React: Experienced with building dynamic user interfaces using component-based architecture and state management.
Design Systems:.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>----
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Material-UI: Skilled in implementing Material Design principles for a consistent and professional look.
                          Bootstrap: Adept at utilizing Bootstrap for rapid development of responsive and mobile-first designs.
                          Version Control:

                          Git & GitHub: Proficient in managing code versions, collaborating on projects, and utilizing Git for version control.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
