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
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition:
            "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
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
