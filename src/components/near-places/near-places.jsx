import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {convertRatingToPercent} from '../../util/util';

const NearPlaces = ({offers = []}) => {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <article
          key={offer.id}
          className="near-places__card place-card">
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${offer.id}`}>
              <img className="place-card__image" src={offer.photos[0]} width={260} height={200} alt="Place image" />
            </Link>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{offer.price}</b>
                <span className="place-card__price-text">/&nbsp;night</span>
              </div>
              <button className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : `` }`} type="button">
                <svg className="place-card__bookmark-icon" width={18} height={19}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${convertRatingToPercent(offer.rating)}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${offer.id}`}>Wood and stone place</Link>
            </h2>
            <p className="place-card__type">{offer.type}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

NearPlaces.propTypes = {
  offers: PropTypes.array.isRequired
};

export default NearPlaces;
