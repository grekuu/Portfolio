import { Container } from "react-bootstrap";
import "./portfolio.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const Portfolio = () => {
  return (
    <div className="portfolio-container" id="projects">
      <Container className="content-container">
        <h3>PORTFOLIO</h3>
        <h2>Each project is a unique piece of development 🧩</h2>
        <ProjectCard
          skills={["React", "Typescript", "Sass", "Bootstrap"]}
          title="MEDICAL SERVICE 👩‍⚕️"
          image="/medical-service.jpg"
          order={false}
          git="https://github.com/grekuu/medical-service"
          live="https://medical-service-grekuu.vercel.app/"
          description="Medical service website offers a seamless online platform for users to conveniently schedule their appointments. Simplifying the process, this platform empowers users to effortlessly book their medical appointments through an intuitive interface. Embrace a new era of healthcare scheduling, putting control at your fingertips."
        />

        <ProjectCard
          skills={["React", "Typescript", "Redux Toolkit", "Sass", "Bootstrap"]}
          title="RAMEN SWAP 🍜"
          image="/ramen-swap.png"
          order={true}
          git="https://github.com/grekuu/RamenSwapExchange"
          live="https://ramen-swap.vercel.app/"
          description="Ramen Swap is a platform designed to facilitate the exchange of tokens within the cryptocurrency realm. This website enables users to efficiently trade their tokens while providing access to a comprehensive token list. Additionally, the platform offers a user panel for a seamless experience."
        />
      </Container>
    </div>
  );
};

export default Portfolio;
