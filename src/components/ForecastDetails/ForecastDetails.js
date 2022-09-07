import React from "react";

export default function ForecastDetails() {
  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>Date</div>
        <div>Max Temperature: c</div>
        <div>Min Temperature: c</div>
        <div>Humidity: %</div>
        <div>Wind: mph</div>
      </div>
    </>
  );
}
