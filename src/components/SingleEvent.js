import React from 'react'
import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import Map from './Map'

var config = {
  headers: { 'Authorization': 'Bearer ' + process.env.API_KEY }
}


class SingleEvent extends React.Component {

  constructor() {
    super()
    this.state = {
      viewport: {
        width: 500,
        height: 500,
        longitude: -0.12743,
        latitude: 51.5074,
        zoom: 14,
        bearing: 0,
        pitch: 0
      },
      event: {},
      info: null
    }
  }
  

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://api.list.co.uk/v1/events/${id}`, config)
      
      .then(resp => this.setState({ event: resp.data }))
  }



  render() {

    if (!this.state.event.schedules, !this.state.event.descriptions) {
      return <h1>Loading...</h1>
    }

    return <div className="section">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-half-tablet">
            <p className="title">
              {this.state.event.name}
            </p>
            <p className="subtitle">
              {this.state.event.schedules[0].place.name}
            </p>
            <p>
              {this.state.event.schedules[0].place.address}
            </p>
            <p>
              {this.state.event.schedules[0].place.town}
            </p>
            <p>
              {this.state.event.schedules[0].place.postal_code}
            </p>
            <Map event={this.state.event}/>
          </div>
        </div>
      </div>
    </div>
  }

}

export default SingleEvent
