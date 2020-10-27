import React, {PureComponent} from "react";
// import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';

const CITY_COORDINATES = [52.38333, 4.9];
const MAP_ZOOM = 12;
const MAP_LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const MAP_ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderPins(offers, map) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((offer) => {
      const offerCords = [offer.coordinates.latitude, offer.coordinates.longitude];
      leaflet
      .marker(offerCords, {icon})
      .addTo(map);
    });
  }

  renderMap(offers) {
    const map = leaflet.map(`map`, {
      center: CITY_COORDINATES,
      zoom: MAP_ZOOM,
      zoomControl: false,
      marker: true
    });
    map.setView(CITY_COORDINATES, MAP_ZOOM);

    leaflet
      .tileLayer(MAP_LAYER, {
        attribution: MAP_ATTRIBUTION
      })
      .addTo(map);

    this.renderPins(offers, map);
  }

  componentDidMount() {
    const {offers} = this.props;

    this.renderMap(offers);

  }

  render() {
    return (
      <section className="cities__map map" id="map"/>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
