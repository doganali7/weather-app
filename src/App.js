import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Fcomponent from "./Fcomponent";
import ForecastDetails from "./components/ForecastDetails/ForecastDetails";
import ForecastSummaries from "./components/ForecastSummaries/ForecastSummaries";
import ForecastSummary from "./components/ForecastSummary/ForecastSummary";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import { useState } from "react";
import { location } from './Weatherdata.json'

function App() {
  return (
    <div>
      <h1>test</h1>
      <LocationDetails/>
    </div>
  );
}
export default App;
