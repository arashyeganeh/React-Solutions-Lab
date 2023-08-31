import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

async function fetchData() {
  const API_BASE_URLS = [
    "http://localhost:3001/api/axios/parallel/A",
    "http://localhost:3001/api/axios/parallel/B",
    "http://localhost:3001/api/axios/parallel/C",
    "http://localhost:3001/api/axios/parallel/D",
    "http://localhost:3001/api/axios/parallel/X",
  ];
  try {
    const reqs = API_BASE_URLS.map((url) => axios.get(url));
    let result = await axios.all(reqs);
    result = result.map((item) => item.data);
    return result;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

function ParallelDataFetching() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  const clickHandler = async () => {
    try {
      setResult("");
      setIsError("");
      const result = await fetchData();
      setResult(JSON.stringify(result));
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  };

  return (
    <>
      <h2>Parallel Data Fetching</h2>
      <p>sdasd sdasdas</p>
      <pre>
        <code>ss</code>
      </pre>
      <Button onClick={clickHandler} variant="outline-info">
        Run
      </Button>
      {result && (
        <div className={`result ${isError ? "error" : ""}`}>{result}</div>
      )}
    </>
  );
}

export default ParallelDataFetching;
