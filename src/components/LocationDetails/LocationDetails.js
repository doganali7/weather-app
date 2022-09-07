import React from 'react'

const LocationDetails = (props) => { 

  return (
    <>
    <div>
      <h1>{props.location}, {props.country}</h1>
    </div>
    </>
  )
}
// LocationDetails.defaultProps = {
//   location: "Designer",
//   country: "Adobe XD"
// }
export default LocationDetails