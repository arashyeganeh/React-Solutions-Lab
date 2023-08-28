import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

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

function FilterResponse() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  async function fetchAndSetResult() {
    try {
      setResult("");
      setIsError(false);
      const fetchedData = await fetchData();
      const Iphones = fetchedData.filter((item) =>
        item.product_name.toLowerCase().includes("iphone")
      );
      setResult(JSON.stringify(Iphones));
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  }

  return (
    <>
      <h2>filter response</h2>
      <p>ss</p>
      <pre>
        <code>
          {` async function fetchAndSetResult() {
    try {
      setResult("");
      setIsError(false);
      const fetchedData = await fetchData();
      const Iphones = fetchedData.filter((item) =>
        item.product_name.toLowerCase().includes("iphone")
      );
      setResult(JSON.stringify(Iphones));
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  }`}
        </code>
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

export default FilterResponse;
