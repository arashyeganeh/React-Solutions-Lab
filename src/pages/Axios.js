import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

import GETRequestRequestComponent from "../components/Axios/GETRequest";
import FilterComponent from "../components/Axios/Filter";
import LoadingComponent from "../components/Axios/Loading";
import InfiniteScrollComponent from "../components/Axios/InfiniteScroll";
import ParallelDataFetchingComponent from "../components/Axios/ParallelDataFetching";
import FormComponent from "../components/Axios/Form";

import hljs from "highlight.js";

function AxiosTutorial() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <div className="position-relative text-primary bg-secondary py-5 mb-5">
        <Container>
          <Row className="py-5">
            <Col>
              <h1 className="display-1 fw-bold mb-4">React with Axios</h1>
              <h3>Let's delve into the most common obstacles</h3>
              <span className="fs-5">by Arash Yeganeh</span>
            </Col>
          </Row>
        </Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="position-absolute top-100 start-0 z-n1"
        >
          <path
            fill="#82CBE3"
            fillOpacity="1"
            d="M0,128L40,117.3C80,107,160,85,240,106.7C320,128,400,192,480,202.7C560,213,640,171,720,133.3C800,96,880,64,960,58.7C1040,53,1120,75,1200,112C1280,149,1360,203,1400,229.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Container className="py-5">
        <Row>
          <Col>
            <h2>What is Axios?</h2>
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
                <b>Promise-Based</b>
                <p>
                  Axios uses promises to handle asynchronous operations, making
                  it easy to write code that is both concise and readable.
                </p>
              </li>
              <li>
                <b>Simple API</b>
                <p>
                  Axios provides a clean and intuitive API for making various
                  types of HTTP requests, such as GET, POST, PUT, and DELETE
                  requests.
                </p>
              </li>
              <li>
                <b>Request and Response Interceptors</b>
                <p>
                  Interceptors can be used to modify requests or responses
                  globally before they are sent or received. This can be useful
                  for adding authentication headers, logging, or modifying data.
                </p>
              </li>
              <li>
                <b>Request and Response Configuration</b>
                <p>
                  You can configure request headers, timeout settings, and other
                  parameters to customize your requests and responses.
                </p>
              </li>
              <li>
                <b>Cancellation</b>
                <p>
                  Axios allows you to cancel ongoing requests using cancellation
                  tokens, helping to manage network requests in complex
                  scenarios.
                </p>
              </li>
              <li>
                <b>Error Handling</b>
                <p>
                  Axios provides a structured way to handle errors, making it
                  easier to differentiate between network errors, server errors,
                  and other issues.
                </p>
              </li>
              <li>
                <b>Concurrent Requests</b>
                <p>
                  Axios supports performing multiple requests concurrently,
                  allowing for efficient data fetching.
                </p>
              </li>
              <li>
                <b>Promise Chaining</b>
                <p>
                  Axios supports promise chaining, enabling you to perform
                  multiple asynchronous operations in sequence.
                </p>
              </li>
              <li>
                <b>Global Configuration</b>
                <p>
                  You can set global configuration options for Axios, such as
                  default headers or base URLs, simplifying the setup of
                  multiple requests.
                </p>
              </li>
            </ul>
            <h2>Installing</h2>
            <p>Run the following command to install Axios using npm:</p>
            <pre>
              <code className="language-shell">$ npm install axios</code>
            </pre>
            <p>import Axios to component</p>
            <pre>
              <code className="language-javascript">
                import axios from 'axios';
              </code>
            </pre>
            <GETRequestRequestComponent />
            <FilterComponent />
            <LoadingComponent />
            <InfiniteScrollComponent />
            <ParallelDataFetchingComponent />
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AxiosTutorial;
