import { Col, Container, Image, Row } from "react-bootstrap";
import useAnimations from "./utils/useAnimations";

const AdvertizingComponent = () => {
  const [ref, isVisible] = useAnimations({ threshold: 0.5 });
  return (
    <Container
      className="advertizing-container"
      fluid
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
      }}
    >
      <Row className="mt-5 ms-5 me-5 mb-5">
        <Col md={6}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas amet
            corrupti quisquam modi possimus minima veritatis praesentium
            incidunt rerum nam itaque expedita, ab error inventore. Nisi
            pariatur maxime laboriosam sed.
          </h1>
        </Col>
        <Col md={6}>
          <Image className="screens" src="./logos/screens.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default AdvertizingComponent;
