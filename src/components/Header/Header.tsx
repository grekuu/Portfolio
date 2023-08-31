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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
