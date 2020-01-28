import React from 'react'


const SingleInfo = ({ info }) => (
  <div>
    <div>{info.name}</div>
    <div>{info.schedules[0].place.address}</div>
    <div>{info.schedules[0].place.town}</div>
    <div>{info.schedules[0].place.postal_code}</div>
    <img width={240} src={info.images ? info.images[0].url : null} />
    <div>
      <a href={info.website} target='_blank'>More Info</a>
    </div>
  </div>
)

export default SingleInfo