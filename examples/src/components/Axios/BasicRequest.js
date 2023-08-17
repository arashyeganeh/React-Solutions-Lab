import axios from "axios";
import { useState } from "react";

const Information = {
  title: "title",
  desc: "desc",
};

async function Fetch() {
  try {
    const res = await axios.get("http://localhost:3001/api/axios");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

function BasicRequest() {
  const [result, setResult] = useState("");

  async function onClickHandler() {
    const result = await Fetch();
    setResult(JSON.stringify(result));
  }

  return (
    <>
      <h2>{Information.title}</h2>
      <p>{Information.desc}</p>
      <code>
        <pre>sds</pre>
      </code>
      <button onClick={onClickHandler}>Run</button>
      <code>
        <pre>{result}</pre>
      </code>
    </>
  );
}

export default BasicRequest;
