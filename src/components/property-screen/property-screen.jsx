import React from "react";
import Offer from "../offer/offer";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {offers} from '../../mocks/offers';
import {reviews} from '../../mocks/reviews';
import NearPlaces from "../near-places/near-places";

const PropertyScreen = ({match}) => {
  const id = match.params.id;
  const matchOffer = offers.find((offer) => offer.id === Number(id));
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <Offer
          offer={matchOffer}
          reviews={reviews}
        />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces
              offers={offers}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyScreen.propTypes = {
  match: PropTypes.object.isRequired
};

export default PropertyScreen;
