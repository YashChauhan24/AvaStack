import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="py-2 footer">
      <Container>
        <Row>
          <Col md={3}>
            <img src="/logo.svg" alt="Logo" className="mb-3" />
            <ul className="list-inline social-links">
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Company</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Signaxe CMS</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Blogs</Nav.Link>
              <Nav.Link href="#">Case Studies</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Important Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Faq's</Nav.Link>
              <Nav.Link href="#">Privacy Policy</Nav.Link>
              <Nav.Link href="#">Terms and Conditions</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} AvaStack. All Rights Reserved.
              Designed by Pingmedia.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
