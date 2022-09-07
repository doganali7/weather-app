import React from "react";

const ForecastSummary = (props) => {
  return (
    <>
      {/* {Data.forecasts.map((forecast) => {
        return <div>{forecast.wind.speed}</div>;
      })} */}
      <div>{props.date}</div>
      <div>icon</div>
      <div>temperature</div>
      <div>decription</div>
      <div>more details</div>
    </>
  )
}
export default ForecastSummary