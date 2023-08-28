import { useState, useEffect, useRef } from "react";
import axios from "axios";

function InfiniteScroll() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  async function fetchData() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:3001/api/axios/infinite?page=${page}`
      );
      setResults((results) => [...results, ...response.data]);
      setPage((pageCount) => pageCount + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
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
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document
      .getElementById("infinite-scroll-result")
      .addEventListener("scroll", handleScroll);
    return () =>
      document
        .getElementById("infinite-scroll-result")
        .removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <h2>Infinite Scroll</h2>
      <p>
        sjsdhaskjh dskjfh ksjdhf skjdhfskj dhsdkjfh sdkjfh sdkfhs dkfsdjkh
        gsdjhg sdjfg sdf sdgf
      </p>
      <div
        style={{ height: 300, backgroundColor: "pink", "overflow-y": "auto" }}
        id="infinite-scroll-result"
      >
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ul>
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default InfiniteScroll;
