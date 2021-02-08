import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "E:/react/coronaupdate/node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import CoronaSearchfilter from "./SearchCorona.jsx/CoronaSearchfilter";
import "./SearchCorona.jsx/Corona.css";
import Tableshow from "./components/Tableshow";
import Form from "./Form/Form";

ReactDOM.render(
  <React.Fragment>
    <Tableshow />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
