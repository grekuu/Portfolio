import "./header.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar>
      <Container className="header-container">
        <Navbar.Brand href="#" className="name-logo">
          greku
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end links-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
