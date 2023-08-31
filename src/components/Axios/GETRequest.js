import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// Fetch data using axios
async function fetchData() {
  const API_BASE_URL = "http://localhost:3001/api/axios/shop";
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function GETRequest() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  async function fetchAndSetResult() {
    try {
      setResult("");
      setIsError(false);
      const fetchedData = await fetchData();
      setResult(JSON.stringify(fetchedData));
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  }

  return (
    <>
      <h2>GET Request</h2>
      <p>
        Obtain the List of Products from the Server with Maximum Simplicity.
      </p>
      <pre>
        <code className="language-javascript">{`async function fetchData() {
  const API_BASE_URL = "http://localhost:3001/api/axios/shop";
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}`}</code>
      </pre>
      <Button onClick={fetchAndSetResult} variant="outline-info">
        Run
      </Button>
      {result && (
        <div className={`result ${isError ? "error" : ""}`}>{result}</div>
      )}
    </>
  );
}

export default GETRequest;
