import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/axios/form";

function PostForm() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setIsError(false);

    const formData = new FormData();
    formData.append("name", formValue.name);

    try {
      const req = await axios.post(API_BASE_URL, formData);
      setResult(req.data);
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  };

  return (
    <>
      <h2>Form</h2>
      <p>lksdjf lskdjfl skdjf</p>
      <pre>
        <code>{`sdas asd sad `}</code>
      </pre>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Arash ..."
                name="name"
                onChange={handleChange}
                value={formValue.name}
                required
              />
              <Form.Text className="text-muted">
                Write something to post by axios to server
              </Form.Text>
            </Form.Group>
            <Button variant="outline-info" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          {result && (
            <div className={`result ${isError ? "error" : ""}`}>{result}</div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default PostForm;
