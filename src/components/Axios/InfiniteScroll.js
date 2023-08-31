import { useState, useEffect, useRef } from "react";
import axios from "axios";

function InfiniteScroll() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      setIsError(false);
      const response = await axios.get(
        `http://localhost:3001/api/axios/infinite?page=${page}`
      );
      setResults((results) => [...results, ...response.data]);
      setPage((pageCount) => pageCount + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  function handleScroll() {
    // if (
    //   window.innerHeight + document.documentElement.scrollTop !==
    //     document.documentElement.offsetHeight ||
    //   isLoading
    // ) {
    //   return;
    // }
    // fetchData();
  }

  useEffect(() => {
    // fetchData();
  }, []);

  // useEffect(() => {
  //   // document
  //   //   .getElementById("infinite-scroll-result")
  //   //   .addEventListener("scroll", handleScroll);
  //   return () =>
  //     // document
  //     //   .getElementById("infinite-scroll-result")
  //     //   .removeEventListener("scroll", handleScroll);
  // });

  return (
    <>
      <h2>Infinite Scrolling</h2>
      <p>
        Build a React component that fetches data in paginated form from an API.
        Use Axios to fetch the initial data and then implement a "Load More"
        button or implement infinite scrolling to load more data as the user
        scrolls down the page.
      </p>
      {results && (
        <div
          id="infinite-scroll-result"
          className={`result ${error ? "error" : ""}`}
          style={{ height: 300, overflow: "auto" }}
        >
          {error && <p>Error: {error.message}</p>}
          {isLoading && <p>Loading...</p>}
          {results.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </div>
      )}
    </>
  );
}

export default InfiniteScroll;
