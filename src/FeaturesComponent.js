import { Container } from "react-bootstrap";
import useAnimations from "./utils/useAnimations";

const FeaturesComponent = () => {
  const [ref, isVisible] = useAnimations({ threshold: 0.5 });
  return (
    <>
      <Container
        className="features mt-5"
        fluid
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0.5,
          transition: "all 1s ease-in-out",
        }}
      >
        <h1 className="ms-5 me-5">
          Avastack is pioneering the world's first web3-powered programmatic
          digital out-of-home platform, built on Avalanche's leading Layer 1
          blockchain, to harness the potential of blockchain technology and
          deliver a more targeted, measurable, and impactful way to connect with
          audiences outside the home.
        </h1>
      </Container>
    </>
  );
};

export default FeaturesComponent;
