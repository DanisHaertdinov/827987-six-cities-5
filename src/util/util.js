import {RATING} from '../constants';

export const convertRatingToPercent = (rating) => {
  return 100 * Math.round(rating) / RATING.MAX;
};
