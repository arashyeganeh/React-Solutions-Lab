# React with Axios

Let's delve into the most common obstacles `by Arash Yeganeh`.

## What is Axios?

Axios is a JavaScript library used to make HTTP requests from web browsers or Node.js servers. It simplifies the process of sending and receiving data over the internet, providing an easy-to-use interface for handling asynchronous operations like fetching data from APIs.

## Features

* **Promise-Based**
  Axios uses promises to handle asynchronous operations, making it easy to write code that is both concise and readable.

* **Simple API**
  Axios provides a clean and intuitive API for making various types of HTTP requests, such as GET, POST, PUT, and DELETE requests.

* **Request and Response Interceptors**
  Interceptors can be used to modify requests or responses globally before they are sent or received. This can be useful for adding authentication headers, logging, or modifying data.

* **Request and Response Configuration**
  You can configure request headers, timeout settings, and other parameters to customize your requests and responses.

* **Cancellation**
  Axios allows you to cancel ongoing requests using cancellation tokens, helping to manage network requests in complex scenarios.

* **Error Handling**
  Axios provides a structured way to handle errors, making it easier to differentiate between network errors, server errors, and other issues.

* **Concurrent Requests**
  Axios supports performing multiple requests concurrently, allowing for efficient data fetching.

* **Promise Chaining**
  Axios supports promise chaining, enabling you to perform multiple asynchronous operations in sequence.

* **Global Configuration**
  You can set global configuration options for Axios, such as default headers or base URLs, simplifying the setup of multiple requests.

## Installing

Run the following command to install Axios using npm:

```bash
$ npm install axios
```

import Axios to component:

```javascript
import axios from 'axios';
```

## GET Request

Obtain the List of Products from the Server with Maximum Simplicity.

```jsx
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
```

## Filter

Use the filter() method to sift through response data.

```jsx
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
```

## Loading

Display the text "Loading..." prior to fetching data.

```jsx
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
      <p>Display the text "Loading" prior to fetching data.</p>
      <pre>
        <code className="language-javascript">

        </code>
      </pre>
      <Button onClick={fetchAndSetResult} variant="outline-info">
        Run
      </Button>
      {(result || loading) && (
        <div className={`result `}>
          {loading ? "Loading..." : result}
        </div>
      )}
    </>
  );
}

export default Loading;
```

## Infinite Scrolling

Build a React component that fetches data in paginated form from an API. Use Axios to fetch the initial data and then implement a "Load More" button or implement infinite scrolling to load more data as the user scrolls down the page.

```jsx
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
        <code>
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
```

## Parallel Data Fetching

Parallel data fetching with Axios means fetching data from multiple sources simultaneously, boosting retrieval speed and app efficiency. Developers use Axios along with async/await or "axios.all" for this, ensuring quicker responses and a more responsive user experience.

```jsx
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

  async function clickHandler() {
    try {
      setResult("");
      setIsError("");
      const result = await fetchData();
      setResult(JSON.stringify(result));
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  }

  return (
    <>
      <h2>Parallel Data Fetching</h2>
      <p>
        Parallel data fetching with Axios means fetching data from multiple
        sources simultaneously, boosting retrieval speed and app efficiency.
        Developers use Axios along with async/await or "axios.all" for this,
        ensuring quicker responses and a more responsive user experience.
      </p>
      <pre>
        <code>ss</code>
      </pre>
      <Button onClick={clickHandler} variant="outline-info">
        Run
      </Button>
      {result && (
        <div className={`result ${
          isError ? "error" : ""
        }`}>{result}</div>
      )}
    </>
  );
}

export default ParallelDataFetching;
```

## Form

you can easily send form data as an HTTP POST request to a server. This is common for submitting user inputs like registrations or search queries to process and store on the server, making Axios a popular choice for modern web forms.

```jsx
import { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/api/axios/form";

function PostForm() {
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setIsError(false);

    try {
      const req = await axios.post(API_BASE_URL, formValue);
      setResult(req.data);
    } catch (error) {
      setIsError(true);
      setResult("Error fetching data");
    }
  };

  return (
    <>
      <h2>Form</h2>
      <p>
        you can easily send form data as an HTTP POST request to a server. This
        is common for submitting user inputs like registrations or search
        queries to process and store on the server, making Axios a popular
        choice for modern web forms.
      </p>
      <pre>
        <code></code>
      </pre>
      <Row>
        <Col xs={12} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Arash ..."
                name="name"
                onChange={handleChange}
                value={formValue.name}
                required
              />
              <Form.Text className="text-muted">
                Write something to post by axios to server
              </Form.Text>
            </Form.Group>
            <Button variant="outline-info" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12} lg={6}>
          {result && (
            <div className={`result ${isError ? "error" : ""}`}>{result}</div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default PostForm;
```

