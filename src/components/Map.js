import React from 'react'
import MapGL, { Marker, Popup } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import SingleInfo from './SingleInfo'
import Pin from './Pin'

const Token = 'pk.eyJ1IjoicGhvZWJleHh4YyIsImEiOiJjazMxenUxYmUwZGdhM2xzMmVwZG5iNnQ0In0.NS8058Cpk5wl3Qko8cJQiQ'
const Icon = 'M32 16C32 19.0139 31.1666 21.8333 29.7178 24.24L16 48L2.28229 24.2402C0.833374 21.8334 0 19.014 0 16C0 7.16345 7.16345 0 16 0C24.8365 0 32 7.16345 32 16ZM16 21C18.7615 21 21 18.7615 21 16C21 13.2385 18.7615 11 16 11C13.2386 11 11 13.2385 11 16C11 18.7615 13.2386 21 16 21Z'

class Map extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 800,
        height: 500,
        longitude: this.props.event.schedules[0].place.lng,
        latitude: this.props.event.schedules[0].place.lat,
        zoom: 14,
        bearing: 0,
        pitch: 0
      },
      info: null
    }
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }


  _renderMarker = () => {
    const { event } = this.props
    return (
      <Marker longitude={event.schedules[0].place.lng} latitude={event.schedules[0].place.lat}>
        <svg 
          style={{ 
            cursor: 'pointer',
            fill: '#FF5876' 
          }}
          onClick={() => this.setState({ info: this.props.event })} 
        >
          <path d={Icon} />
        </svg>
      </Marker> 
    )
  }


  _renderPopup() {
    const { info } = this.state

    return (
      info && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={info.schedules[0].place.lng}
          latitude={info.schedules[0].place.lat}
          closeOnClick={false}
          onClose={() => this.setState({ info: null })}
        >
          {/* <h1>hello</h1> */}
          <SingleInfo info={info}/>
        </Popup>
      )
    )
  }


  render() {
    return <div>
      <MapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={Token}
      >
        {this._renderMarker()}
        {this._renderPopup()}
        
      </MapGL> 
    </div>
  }
}

export default Map