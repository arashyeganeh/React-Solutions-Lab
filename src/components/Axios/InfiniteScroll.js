import { useState, useEffect } from "react";
import axios from "axios";

// Fetch data using axios
async function fetchData(page) {
  const API_BASE_URL = `http://localhost:3001/api/axios/infinite?page=${page}`;
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function InfiniteScroll() {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);

  async function updateList() {
    try {
      let response = await fetchData(page);
      setResults((results) => [...results, ...response]);
      setPage((pageCount) => pageCount + 1);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setResults(error);
    }
  }

  async function handleScroll(event) {
    if (
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    ) {
      updateList();
    }
  }

  useEffect(() => {
    updateList();
  }, []);

  return (
    <>
      <h2>Infinite Scrolling</h2>
      <p>
        Build a React component that fetches data in paginated form from an API.
        Use Axios to fetch the initial data and then implement a "Load More"
        button or implement infinite scrolling to load more data as the user
        scrolls down the page.
      </p>
      <pre>
        <code className="language-javascript">
          {`import { useState, useEffect } from "react";
import axios from "axios";

// Fetch data using axios
async function fetchData(page) {
  const API_BASE_URL = \`http://localhost:3001/api/axios/infinite?page=\${page}\`;
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function InfiniteScroll() {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);

  async function updateList() {
    try {
      let response = await fetchData(page);
      setResults((results) => [...results, ...response]);
      setPage((pageCount) => pageCount + 1);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setResults(error);
    }
  }

  async function handleScroll(event) {
    if (
      event.target.scrollHeight - event.target.scrollTop ===
      event.target.clientHeight
    ) {
      updateList();
    }
  }

  useEffect(() => {
    updateList();
  }, []);

  return (
    <>
      <h2>Infinite Scrolling</h2>
      <p>
        Build a React component that fetches data in paginated form from an API.
        Use Axios to fetch the initial data and then implement a "Load More"
        button or implement infinite scrolling to load more data as the user
        scrolls down the page.
      </p>
      <pre>
        <code>
        </code>
      </pre>
      {results && (
        <div
          onScroll={handleScroll}
          className={\`result \${isError ? "error" : ""}\`}
          style={{ height: 300, overflow: "auto" }}
        >
          <ul className="list-unstyled">
            {results.map((item) => {
              return (
                <li key={item} className="text-center rounded py-1 mb-2" style={{backgroundColor: "#a6caff"}}>
                  Scroll Down - {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default InfiniteScroll;
`}
        </code>
      </pre>
      {results && (
        <div
          onScroll={handleScroll}
          className={`result ${isError ? "error" : ""}`}
          style={{ height: 300, overflow: "auto" }}
        >
          <ul className="list-unstyled">
            {results.map((item) => {
              return (
                <li
                  key={item}
                  className="text-center rounded py-1 mb-2"
                  style={{ backgroundColor: "#a6caff" }}
                >
                  Scroll Down - {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default InfiniteScroll;
