function Preface() {
  return (
    <>
      <h1>What is Axios?</h1>
      Promise based HTTP client for the browser and node.js Axios is a
      promise-based HTTP Client for node.js and the browser. It is isomorphic (=
      it can run in the browser and nodejs with the same codebase). On the
      server-side it uses the native node.js http module, while on the client
      (browser) it uses XMLHttpRequests.
      <h2>Features</h2>
      <ul>
        <li>
          Make XMLHttpRequests from the browser Make http requests from node.js
        </li>
        <li>
          Supports the Promise API Intercept request and response Transform
          request
        </li>
        <li>
          and response data Cancel requests Timeouts Query parameters
          serialization
        </li>
        <li>
          with support for nested entries Automatic request body serialization
          to:
          <ul>
            <li>JSON (application/json)</li>
            <li>Multipart / FormData (multipart/form-data)</li>
            <li>URL encoded form (application/x-www-form-urlencoded)</li>
          </ul>
        </li>
        <li>Posting HTML forms as JSON</li>
        <li>Automatic JSON data handling in response</li>
        <li>
          Progress capturing for browsers and node.js with extra info (speed
          rate, remaining time)
        </li>
        <li>Setting bandwidth limits for node.js</li>
        <li>
          Compatible with spec-compliant FormData and Blob (including node.js)
        </li>
        <li>Client side support for protecting against XSRF</li>
      </ul>
      <h2>Installing</h2>
      Using npm:
      <code>$ npm install axios</code>
    </>
  );
}

export default Preface;
