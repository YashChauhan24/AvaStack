import { Container } from "react-bootstrap";

const HeroComponent = () => {
  return (
    <Container fluid className="hero-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        src="./vedios/timelaps.webm"
      ></video>
      <div className="content">
        <h1>AvaStack</h1>
      </div>
    </Container>
  );
};

export default HeroComponent;
