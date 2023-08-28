import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// Fetch data using axios
async function fetchData() {
  const API_BASE_URL = "http://localhost:3001/api/axios/loading";
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

function Loading() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchAndSetResult() {
    try {
      setIsError(false);
      setLoading(true);
      setResult("");
      const fetchedData = await fetchData();
      setResult(JSON.stringify(fetchedData));
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h2>Loading</h2>
      <p>sdasdasdas</p>
      <Button onClick={fetchAndSetResult} variant="outline-info">
        Run
      </Button>
      {(result || loading) && (
        <div className={`result ${isError ? "error" : ""}`}>
          {loading ? "Loading..." : result}
        </div>
      )}
    </>
  );
}

export default Loading;
