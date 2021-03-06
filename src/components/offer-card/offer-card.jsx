import React from "react";
import PropTypes from "prop-types";
import {componentsPropTypes} from '../../prop-types';
import {convertRatingToPercent} from '../../util/util';
import {Link} from "react-router-dom";

const OfferCard = (props) => {
  const {offer, onMouseOver} = props;
  const {id, isPremium, photos, price, isFavorite, rating, title, type} = offer || {};

  return (
    <article className="cities__place-card place-card" onMouseOver={() => onMouseOver(offer)}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={photos[0]} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : `` }`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${convertRatingToPercent(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(componentsPropTypes.offer).isRequired,
  onMouseOver: PropTypes.func.isRequired,
};

export default OfferCard;
