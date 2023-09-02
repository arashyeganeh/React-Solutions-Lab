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

function Filter() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleClick() {
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
      <h2>Filter</h2>
      <p>Use the filter() method to sift through response data.</p>
      <pre>
        <code className="language-javascript">
          {`
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

async function handleClick() {
  try {
    const fetchedData = await fetchData();
    const Iphones = fetchedData.filter((item) =>
      item.product_name.toLowerCase().includes("iphone")
    );
    return Iphones;

  } catch (error) {
    console.error(erro)
  }
}

`}
        </code>
      </pre>
      <Button onClick={handleClick} variant="outline-info">
        Run
      </Button>
      {result && (
        <div className={`result ${isError ? "error" : ""}`}>{result}</div>
      )}
    </>
  );
}

export default Filter;
