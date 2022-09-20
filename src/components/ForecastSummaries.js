/* eslint-disable react/prop-types */
import React from "react";
import "../styles/ForecastSummaries.css";
import ForecastSummary from "./ForecastSummary";

export default function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}
