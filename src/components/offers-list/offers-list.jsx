import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOffer: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <OfferCard
          key={offer.id}
          offer={offer}
          onMouseOver={() => this.setState({activeOffer: offer})}
        />) }
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersList;
