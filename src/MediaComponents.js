import { Col, Container, Image, Row } from "react-bootstrap";

const MediaComponent = () => {
  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center mb-4">For Media Owners</h2>

        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <div className="text-center">
              <Image src="https://i.imgur.com/n03C53A.png" fluid />
              <h4 className="mt-3">Easy Integration</h4>
              <p>
                Signaxe Integration is the simplest integration in the industry.
                Signaxe is compatible with most CMS present in the industry
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <Image src="https://i.imgur.com/R9rV82X.png" fluid />
              <h4 className="mt-3">Revenue Stream</h4>
              <p>
                Unlock new revenue stream with Signaxe. Advertisers can easily
                discover and book slots thus maximising your digital real estate
                revenue
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="text-center">
              <Image src="https://i.imgur.com/qB4bK0Y.png" fluid />
              <h4 className="mt-3">Dynamic Pricing</h4>
              <p>
                Signaxe lets you price differently based on day, time and other
                metrics. Earn as you want with different peak and non peak hour
                pricing
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MediaComponent;
