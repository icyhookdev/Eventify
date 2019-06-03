import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import {
  createDraftPin,
  updateDraftPinLocation,
} from '../../store/actions/pins';
import PinIcon from '../icons/PinIcon';
import MapSideContent from './MapSideContent';

const Map = ({
  fullWidth,
  draft,
  createDraftPin,
  updateDraftPinLocation,
  currentPin,
  currentEventPins,
}) => {
  const [map] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 13,
  });
  const mapRef = useRef(null);

  const [viewport, setViewport] = useState(map);
  const [userPosition, setUserPosition] = useState(null);
  const [mapWidth, setMapWidth] = useState('400px');

  useEffect(() => {
    getUserPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onSetMapWidth();
    // eslint-disable-next-line
  }, []);

  const onSetMapWidth = () => {
    if (fullWidth) {
      setMapWidth('100%');
    }
  };

  const handleMapClick = ({ lngLat, leftButton }) => {
    if (!leftButton) return;

    if (!draft) {
      createDraftPin();
    }

    const [longitude, latitude] = lngLat;

    updateDraftPinLocation({ longitude, latitude });
  };

  const getUserPosition = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        setViewport({ ...viewport, latitude, longitude });
        setUserPosition({ latitude, longitude });
      });
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr' }}>
      <MapSideContent draft={draft} currentPin={currentPin} />
      <ReactMapGL
        ref={mapRef}
        width={mapWidth}
        height="400px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoidGhpZW5qcyIsImEiOiJjanRhbGswencwY2FqM3lvYmFha2t3Zm8zIn0.jnoLsme-neGURWbBd-C5iw"
        onViewportChange={newViewport => setViewport(newViewport)}
        onClick={handleMapClick}
        {...viewport}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={newViewport => setViewport(newViewport)}
          mapboxApiAccessToken="pk.eyJ1IjoidGhpZW5qcyIsImEiOiJjanRhbGswencwY2FqM3lvYmFha2t3Zm8zIn0.jnoLsme-neGURWbBd-C5iw"
        />
        <div
          style={{ position: 'absolute', bottom: 0, right: 0, margin: '1em' }}
        >
          <NavigationControl
            onViewportChange={newViewport => setViewport(newViewport)}
          />
        </div>

        {/* show the user pin */}
        {userPosition && (
          <Marker
            latitude={userPosition.latitude}
            longitude={userPosition.longitude}
            offsetLeft={-19}
            offsetTop={-37}
          >
            <PinIcon size="40" color="red" />
          </Marker>
        )}

        {/* show draft pin */}
        {draft && (
          <Marker
            latitude={draft.latitude}
            longitude={draft.longitude}
            offsetLeft={-19}
            offsetTop={-19}
          >
            <PinIcon size="40" color="darkblue" />
          </Marker>
        )}

        {/* Events pin */}
        {currentEventPins &&
          currentEventPins.map(pin => (
            <Marker
              key={pin._id}
              latitude={parseFloat(pin.latitude)}
              longitude={parseFloat(pin.longitude)}
              offsetLeft={-19}
              offsetTop={-37}
            >
              <PinIcon
                // onClick={() => handleSelectPin(pin)}
                size={40}
                color="#fdcb6e"
              />
            </Marker>
          ))}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = ({ pins }) => ({
  draft: pins.draft,
  currentPin: pins.currentPin,
  currentEventPins: pins.currentEventPins,
});

export default connect(
  mapStateToProps,
  { createDraftPin, updateDraftPinLocation }
)(Map);
