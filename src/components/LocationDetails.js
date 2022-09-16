import React from "react";
import PropTypes from "prop-types";

export default function LocationDetails(props) {
  const { city, country } = props;
  return <h1>{`${city}, ${country}`}</h1>;
}
LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
