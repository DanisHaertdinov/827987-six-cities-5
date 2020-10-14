import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import PropertyScreen from '../property-screen/property-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import {filterByBoolParameter} from '../../util/util';

const App = ({offers, reviews}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen
          offers = {offers}
        />
      </Route>
      <Route exact path="/login">
        <LoginScreen/>
      </Route>
      <Route exact path="/favorites">
        <FavoritesScreen
          offers = {filterByBoolParameter(offers, `isFavorite`)}
        />
      </Route>
      <Route exact path="/offer/:id">
        <PropertyScreen
          offer = {offers[1]}
          reviews = {reviews}
        />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
