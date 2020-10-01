import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {OFFERS_COUNT} from "./components/const";

ReactDOM.render(
    <App
      offersCount = {OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
