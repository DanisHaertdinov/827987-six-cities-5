import PropTypes from 'prop-types';

export const componentsPropTypes = {
  offer: {
    id: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    numberOfBedrooms: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
    reviews: PropTypes.array.isRequired,
  },
};
