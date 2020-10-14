import React from "react";
import PropTypes from "prop-types";
import {componentsPropTypes} from '../../prop-types';
import {convertRatingToPercent} from '../../util/util';
import ReviewsForm from '../reviews-form/reviews-form';

const Offer = ({offer, reviews}) => {
  const {
    isPremium,
    photos,
    price,
    isFavorite,
    rating,
    title,
    type,
    description,
    numberOfBedrooms,
    capacity,
    goods,
    host,
  } = offer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {photos.map((photo, i) => (
            <div
              key={`property__image-${i}`}
              className="property__image-wrapper">
              <img className="property__image" src={photo} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium &&
          <div className="property__mark">
            <span>Premium</span>
          </div>}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : `` }`} type="button">
              <svg className="property__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${convertRatingToPercent(rating)}%`}} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {numberOfBedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {capacity} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">€{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((good, i) => (
                <li
                  key={`property__inside-item-${i}`}
                  className="property__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper ${host.isSuper ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                <img className="property__avatar user__avatar" src={host.avatar} width={74} height={74} alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
            <ul className="reviews__list">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src={review.avatar} width={54} height={54} alt="Reviews avatar" />
                    </div>
                    <span className="reviews__user-name">
                      {review.name}
                    </span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{width: `${convertRatingToPercent(review.rate)}%`}} />
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      {review.text}
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                  </div>
                </li>
              ))}
            </ul>
            <ReviewsForm />
          </section>
        </div>
      </div>
      <section className="property__map map" />
    </section>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape(componentsPropTypes.offer).isRequired,
  reviews: PropTypes.array.isRequired
};

export default Offer;
