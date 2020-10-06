import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";
import PropertyScreen from '../property-screen/property-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';

const App = ({offersCount}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen
          offersCount = {offersCount}
        />
      </Route>
      <Route exact path="/login">
        <LoginScreen/>
      </Route>
      <Route exact path="/favorites">
        <FavoritesScreen/>
      </Route>
      <Route exact path="/offer/:id">
        <PropertyScreen/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
