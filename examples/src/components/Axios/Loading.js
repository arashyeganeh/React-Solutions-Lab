import { useState } from "react";
import axios from "axios";

const Information = {
  title: "Loading",
  desc: "New Description New Description New Description New Description New Description New Description",
};

// Fetch data using axios
async function fetchData() {
  const baseUrl = "http://localhost:3001/api/axios/shop/loading";
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function Loading() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchAndSetResult() {
    try {
      setLoading(true);
      setResult("")
      const fetchedData = await fetchData();
      setResult(JSON.stringify(fetchedData, null, 4));
    } catch (error) {
      setResult("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h2>{Information.title}</h2>
      <p>{Information.desc}</p>
      <button onClick={fetchAndSetResult}>Fetch Data</button>
      {loading && <span>loading ...</span>}
      {result && (
        <pre className="result">
          <code>{result}</code>
        </pre>
      )}
    </>
  );
}

export default Loading;
