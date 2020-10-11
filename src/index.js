import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {OFFERS_COUNT} from "./constants";
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

ReactDOM.render(
    <App
      offersCount = {OFFERS_COUNT}
      offers = {offers}
      reviews = {reviews}
    />,
    document.querySelector(`#root`)
);
