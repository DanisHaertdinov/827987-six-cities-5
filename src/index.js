import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {OFFERS_COUNT} from "./constants";

ReactDOM.render(
    <App
      offersCount = {OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
