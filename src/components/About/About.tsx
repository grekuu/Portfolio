import "./about.scss";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-container" id="about">
      <Container className="content-container">
        <div className="container-left" data-aos="fade-up-right">
          <img src="/chill-programming.jpg" alt="image" />
        </div>
        <div className="container-right" data-aos="fade-up">
          <h3>ABOUT ME</h3>
          <h2>A dedicated Front-end Developer based in Szczecin, Poland 📍</h2>
          <p>
            As a Junior Front-End Developer, I come equipped with a diverse
            toolkit encompassing HTML, CSS, JavaScript, React, Typescript,
            Bootstrap, React Toolkit and Sass. My strength shines through
            curating and upkeeping responsive websites that provide a seamless
            user journey. My craft revolves around forging interactive,
            captivating interfaces by scripting meticulous and streamlined code.
            I harness the power of advanced development tools and methodologies
            to create innovative digital experiences. Moreover, I thrive in
            synergistic collaborations, leveraging collective strengths to
            deliver exceptional web applications.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
