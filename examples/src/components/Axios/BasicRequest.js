import { useState } from "react";
import axios from "axios";

// Fetch data using axios
async function fetchData() {
  const baseUrl = "http://localhost:3001/api/axios/shop";
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function BasicRequest() {
  const [result, setResult] = useState("");

  async function fetchAndSetResult() {
    try {
      const fetchedData = await fetchData();
      setResult(JSON.stringify(fetchedData, null, 4));
    } catch (error) {
      setResult("Error fetching data");
    }
  }

  return (
    <>
      <h2>Get Data with a Simple Axios Request</h2>
      <p>Obtain the List of Products from the Server with Maximum Simplicity.</p>
      <button onClick={fetchAndSetResult}>Fetch Data</button>
      {result && (
        <pre className="result">
          <code>{result}</code>
        </pre>
      )}
    </>
  );
}

export default BasicRequest;
