import "./App.css";
import { useState } from "react";
import React, { Component } from "react";
import ForecastDetails from "./components/ForecastDetails/ForecastDetails";
import ForecastSummaries from "./components/ForecastSummaries/ForecastSummaries";
import ForecastSummary from "./components/ForecastSummary/ForecastSummary";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import Data from "./Weatherdata.json";

function App() {
  console.log(Data.location.city);
  console.log(Data.forecasts[0].date);

  const location = { city: Data.location.city, country: Data.location.country };
  const date = {time: Data.forecasts.map((forecast) => {
    return forecast.date;
  })};
  console.log(date);

  return (
    <div>
      <LocationDetails location={location.city} country={location.country} />
      <div>
        {Data.forecasts.map((forecast) => {
          return <div>{forecast.wind.speed}</div>;
        })}
      </div>
      <div>
        <ForecastSummaries />
      </div>
      <div>
        <ForecastDetails date = {date}/>
      </div>
    </div>
  );
}
export default App;
