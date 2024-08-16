import { Col, Container, Image, Row } from "react-bootstrap";

const EarthComponent = () => {
  return (
    <Container className="campaign-container" fluid>
      <Row className="mt-5 ms-5 me-5 mb-5">
        <Col md={6}>
          <Image className="earth-img" src="./logos/earth.jpg" fluid />
        </Col>
        <Col md={6}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas amet
            corrupti quisquam modi possimus minima veritatis praesentium
            incidunt rerum nam itaque expedita, ab error inventore. Nisi
            pariatur maxime laboriosam sed.
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default EarthComponent;
