import "./projectCard.scss";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

interface ProjectCardProps {
  skills: string[];
  image: string;
  title: string;
  description: string;
  git: string;
  live: string;
  order: boolean;
}

const ProjectCard = ({
  skills,
  image,
  title,
  description,
  git,
  live,
  order,
}: ProjectCardProps) => {
  return (
    <div className={order ? "project-card reverse" : "project-card"}>
      <div className="card-left">
        <a href={live} target="_blank">
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </a>
      </div>
      <div className="card-right">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="skills-box">
          {skills.map((skill: string, id) => {
            return (
              <p className="skill" key={id}>
                {skill}
              </p>
            );
          })}
        </div>

        <div className="links">
          <a href={git} target="_blank">
            Code <AiFillGithub className="icon" />
          </a>
          <a href={live} target="_blank">
            Live demo
            <AiOutlineLink className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
