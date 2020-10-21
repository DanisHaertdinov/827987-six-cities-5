import {RATING, Cities} from '../constants';

export const convertRatingToPercent = (rating) => {
  return 100 * Math.round(rating) / RATING.MAX;
};

export const filterOffersByCity = (offers, city) => {
  return offers.filter((offer) => offer.city === city);
};

export const filterByBoolParameter = (items, parameter) => {
  return items.filter((item) => item[parameter]);
};

export const groupOffersByCities = (offers) => {
  const offersMap = {};

  Cities.forEach((city) => {
    const filteredOffers = filterOffersByCity(offers, city);

    if (filteredOffers.length > 0) {
      offersMap[city] = filteredOffers;
    }
  });

  return offersMap;
};
