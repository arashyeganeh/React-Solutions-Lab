import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

import BasicRequestComponent from "../components/Axios/BasicRequest";
import FilterComponent from "../components/Axios/Filter";
import LoadingComponent from "../components/Axios/Loading";
import InfiniteScrollComponent from "../components/Axios/InfiniteScroll";
import SubmitFormComponent from "../components/Axios/SubmitForm";

import hljs from "highlight.js";

function AxiosTutorial() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <Container fluid className="bg-secondary py-5 mb-5">
        <Row className="py-5 row">
          <Col className="text-center">
            <h1 className="display-1 fw-bold text-white mb-4">
              React with Axios
            </h1>
            <h3 className="fw-bold text-white mb-3">ss</h3>
          </Col>
        </Row>
      </Container>
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="fw-bold display-4">What is Axios?</h1>
            <p>
              Axios is a JavaScript library used to make HTTP requests from web
              browsers or Node.js servers. It simplifies the process of sending
              and receiving data over the internet, providing an easy-to-use
              interface for handling asynchronous operations like fetching data
              from APIs.
            </p>
            <h2>Features</h2>
            <ul>
              <li>
                Promise-Based: Axios uses promises to handle asynchronous
                operations, making it easy to write code that is both concise
                and readable.
              </li>
              <li>
                Browser and Node.js Support: Axios can be used in both web
                browser environments and Node.js environments, allowing you to
                perform HTTP requests on the frontend and backend of your
                applications.
              </li>
              <li>
                Simple API: Axios provides a clean and intuitive API for making
                various types of HTTP requests, such as GET, POST, PUT, and
                DELETE requests.
              </li>
              <li>
                Request and Response Interceptors: Interceptors can be used to
                modify requests or responses globally before they are sent or
                received. This can be useful for adding authentication headers,
                logging, or modifying data.
              </li>
              <li>
                Automatic Data Transformation: Axios can automatically parse and
                transform response data, such as JSON, eliminating the need for
                manual data manipulation in most cases.
              </li>
              <li>
                Request and Response Configuration: You can configure request
                headers, timeout settings, and other parameters to customize
                your requests and responses.
              </li>
              <li>
                Cancellation: Axios allows you to cancel ongoing requests using
                cancellation tokens, helping to manage network requests in
                complex scenarios.
              </li>
              <li>
                Error Handling: Axios provides a structured way to handle
                errors, making it easier to differentiate between network
                errors, server errors, and other issues.
              </li>
              <li>
                Concurrent Requests: Axios supports performing multiple requests
                concurrently, allowing for efficient data fetching.
              </li>
              <li>
                Progress Tracking: You can track the progress of file uploads or
                downloads using built-in progress tracking features.
              </li>
              <li>
                Promise Chaining: Axios supports promise chaining, enabling you
                to perform multiple asynchronous operations in sequence.
              </li>
              <li>
                Cross-Origin Requests: Axios handles cross-origin requests with
                proper CORS handling, making it suitable for working with APIs
                on different domains.
              </li>
              <li>
                Proxy Support: Axios can be configured to work with proxy
                servers, which can be helpful for debugging and testing.
              </li>
              <li>
                Global Configuration: You can set global configuration options
                for Axios, such as default headers or base URLs, simplifying the
                setup of multiple requests.
              </li>
              <li>
                Middleware-like Behavior: Through the use of interceptors, Axios
                allows you to implement behavior similar to middleware in a
                request/response cycle.
              </li>
            </ul>
            <h2>Installing</h2>
            <p>Run the following command to install Axios using npm:</p>
            <pre>
              <code>$ npm install axios</code>
            </pre>
            <p>
              if you're using Axios in a Node.js environment, you can require it
              like this:
            </p>
            <pre>
              <code>const axios = require('axios');</code>
            </pre>
            <p>
              If you're using Axios in a frontend environment (e.g., a React
              app), you can import it like this:
            </p>
            <pre>
              <code>import axios from 'axios';</code>
            </pre>
            <BasicRequestComponent />
            <FilterComponent />
            <LoadingComponent />
            <InfiniteScrollComponent />
            <SubmitFormComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AxiosTutorial;
