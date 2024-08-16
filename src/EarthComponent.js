import { Col, Container, Image, Row } from "react-bootstrap";
import useAnimations from "./utils/useAnimations";

const EarthComponent = () => {
  const [ref, isVisible] = useAnimations({ threshold: 0.5 });
  return (
    <Container
      className="earth-container"
      fluid
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Row className="mt-5 ms-5 me-5 mb-5">
        <Col md={6}>
          <Image
            className="earth-img"
            src="https://i.gifer.com/PX5H.gif"
            fluid
          />
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
