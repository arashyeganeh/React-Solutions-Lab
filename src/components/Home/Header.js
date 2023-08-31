import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <header
        style={{ backgroundColor: "#EDEFF2" }}
        className="text-primary border-bottom"
      >
        <Container className="py-5 text-center">
          <Row>
            <Col>
              <svg
                width="6rem"
                height="6rem"
                viewBox="-10.5 -9.45 21 18.9"
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" strokeWidth="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
              <h1 className="fw-bold">React Solutions Lab</h1>
              <p className="fs-5">Enhance Your Abilities</p>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
