import _ from 'lodash'
import React from 'react'
import { compose, withProps, lifecycle } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from 'react-google-maps'

const MapWithAMarker = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBbW7tk3RbIQmucr-iTmjt5kxVVOlC2lX0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.location ? props.location.lat : -34.397, lng: props.location ? props.location.lng : 150.644 }}
  >
    <Marker
      position={{ lat: props.location ? props.location.lat : -34.397, lng: props.location ? props.location.lng : 150.644 }}
    />
  </GoogleMap>
)

const enhance = _.identity

const ReactGoogleMaps = (props) => (
  <MapWithAMarker key='map' location={props.location} />
)

export default enhance(ReactGoogleMaps)
