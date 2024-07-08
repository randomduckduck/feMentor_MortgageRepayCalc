import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Main_countriesAPI from "./Main_countriesAPI";
import Main_mortageRepayCalc from "./Main_mortageRepayCalc";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main_countriesAPI></Main_countriesAPI> */}
    <Main_mortageRepayCalc></Main_mortageRepayCalc>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
