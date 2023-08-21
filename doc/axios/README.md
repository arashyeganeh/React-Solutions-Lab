# Axios

## What is Axios?

Axios is a JavaScript library used to make HTTP requests from web browsers or Node.js servers. It simplifies the process of sending and receiving data over the internet, providing an easy-to-use interface for handling asynchronous operations like fetching data from APIs.

## Features

* **Promise-Based:** It uses promises to handle asynchronous operations, making it easy to write code that is both concise and readable.
* **Browser and Node.js Support:** Axios can be used in both web browser environments and Node.js environments, allowing you to perform HTTP requests on the front end and back end of your applications.
* **Simple API:** it provides a clean and intuitive API for making various types of HTTP requests, such as GET, POST, PUT, and DELETE requests.
* **Request and Response Interceptors:** Interceptors can be used to modify requests or responses globally before they are sent or received. This can be useful for adding authentication headers, logging, or modifying data.
* **Automatic Data Transformation:** It can automatically parse and transform response data, such as JSON, eliminating the need for manual data manipulation in most cases.
* **Request and Response Configuration:** You can configure request headers, timeout settings, and other parameters to customize your requests and responses.
* **Cancellation:** It allows you to cancel ongoing requests using cancellation tokens, helping to manage network requests in complex scenarios.
* **Error Handling:** It provides a structured way to handle errors, making it easier to differentiate between network errors, server errors, and other issues.
* **Concurrent Requests:** It supports performing multiple requests concurrently, allowing for efficient data fetching.
* **Progress Tracking:** You can track the progress of file uploads or downloads using built-in progress tracking features.
* **Promise Chaining:** It supports promise chaining, enabling you to perform multiple asynchronous operations in sequence.
* **Cross-Origin Requests:** It handles cross-origin requests with proper CORS handling, making it suitable for working with APIs on different domains.
* **Proxy Support:** It can be configured to work with proxy servers, which can be helpful for debugging and testing.
* **Global Configuration:** You can set global configuration options for Axios, such as default headers or base URLs, simplifying the setup of multiple requests.
* **Middleware-like Behavior:** Through the use of interceptors, Axios allows you to implement behavior similar to middleware in a request/response cycle.

## Installing

Run the following command to install Axios using npm:

```bash
$ npm install axios
```

* in a Node.js environment, you can require it like this:

  ```javascript
  const axios = require('axios');
  ```

* in a frontend environment (e.g., a React app), you can import it like this:

  ```javascript
  import axios from 'axios';
  ```

## Simple Request

Obtain the List of Products from the Server with Maximum Simplicity.

```react
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
```



