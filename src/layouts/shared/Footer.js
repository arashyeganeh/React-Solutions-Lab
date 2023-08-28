import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="text-center bg-light text-muted py-2">
        <Container>
          <Row>
            <Col>
              Arash Yeganeh |{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/arashyeganeh"
                className="text-decoration-none"
              >
                github.com/arashyeganeh
              </a>{" "}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
