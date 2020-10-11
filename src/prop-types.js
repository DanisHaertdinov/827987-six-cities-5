import PropTypes from 'prop-types';

export const componentsPropTypes = {
  offerCard: {
    isPremium: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }
};
