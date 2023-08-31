import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="text-center bg-secondary text-primary py-2">
        <Container>
          <Row>
            <Col>
              For see more content at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/arashyeganeh"
                className="text-decoration-none text-primary"
              >
                github.com/arashyeganeh
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
