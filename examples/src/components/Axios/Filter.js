import { useState } from "react";
import axios from "axios";

const Information = {
  title: "filter response",
  desc: "New Description New Description New Description New Description New Description New Description",
};

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

function FilterResponse() {
  const [result, setResult] = useState("");

  async function fetchAndSetResult() {
    try {
      const fetchedData = await fetchData();
      const Iphones = fetchedData.filter((item) =>
        item.product_name.toLowerCase().includes("iphone")
      );
      setResult(JSON.stringify(Iphones, null, 4));
    } catch (error) {
      setResult("Error fetching data");
    }
  }

  return (
    <>
      <h2>{Information.title}</h2>
      <p>{Information.desc}</p>
      <button onClick={fetchAndSetResult}>Fetch Data</button>
      {result && (
        <pre className="result">
          <code>{result}</code>
        </pre>
      )}
    </>
  );
}

export default FilterResponse;
