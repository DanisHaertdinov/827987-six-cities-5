import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import PropertyScreen from '../property-screen/property-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import {filterByBoolParameter} from '../../util/util';
import {offers} from '../../mocks/offers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainScreen
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
      <Route exact path="/offer/:id" component={PropertyScreen}>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
