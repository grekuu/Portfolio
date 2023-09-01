import { Container } from "react-bootstrap";
import "./hero.scss";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineHtml5,
} from "react-icons/ai";
import { BiLogoReact, BiLogoRedux } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <Container className="content-container">
        <div className="container-left" data-aos="fade-up">
          <h1>Front-End React Developer 👋🏻</h1>
          <p>
            Hi, I'm Gracjan Prusik. A passionate Front-end React Developer based
            in{" "}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Szczecin/@53.4297874,14.4598197,11z/data=!3m1!4b1!4m6!3m5!1s0x47aa093800d3a759:0xa95adc4e5f8ac4f3!8m2!3d53.4285438!4d14.5528116!16zL20vMDcxZzY?hl=pl-PL&entry=ttu"
            >
              Szczecin, Poland.
            </a>{" "}
            📍
          </p>
          <div className="socials">
            <a href="https://github.com/grekuu">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/gracjan-prusik-b12041251/">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="container-right" data-aos="fade-up">
          <img src="/React-icon.svg.png" alt="" />
        </div>
      </Container>
      <Container>
        <div className="tech-stack">
          <span>Tech Stack</span>
          <div className="logos">
            <div className="logo" data-aos="flip-up">
              <AiOutlineHtml5 />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <TbBrandCss3 />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <TbBrandJavascript />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <BsBootstrap />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <TbBrandTypescript />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <BiLogoReact />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <BiLogoRedux />
            </div>
            <div className="logo" data-aos="zoom-in-up">
              <DiSass />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
