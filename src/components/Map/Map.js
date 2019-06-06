import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import {
  createDraftPin,
  updateDraftPinLocation,
  setCurrentPin,
  deletePin,
} from '../../store/actions/pins';
import PinIcon from '../icons/PinIcon';
import MapSideContent from './MapSideContent';
import marker from '../../assets/img/marker.png';
import placeholderImage from '../../assets/img/placeholder.png';

const Map = ({
  fullWidth,
  draft,
  createDraftPin,
  updateDraftPinLocation,
  currentPin,
  currentEventPins,
  setCurrentPin,
  event,
  deletePin,
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
  const [popup, setPopup] = useState(null);

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

  const handleMapClick = ({ lngLat, leftButton, target }) => {
    if (!leftButton) return;

    if (
      target.className === 'mapboxgl-ctrl-geocoder--input' ||
      target.className === 'mapboxgl-ctrl-geocoder--suggestion-address' ||
      target.className === 'delBtn'
    ) {
      return;
    }

    console.log(target);

    if (!draft) {
      createDraftPin();
    }
    const [longitude, latitude] = lngLat;

    updateDraftPinLocation({ longitude, latitude });
  };

  const handleSelectPin = pin => {
    console.log('click');
    setPopup(pin);
    setCurrentPin(pin);
    console.log(pin);
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

  // TODO: delete pin
  const handleDeletePin = id => {
    console.log(id);
    deletePin(id);
    setPopup(null);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        position: 'relative',
      }}
    >
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
              <div
                onClick={() => handleSelectPin(pin)}
                style={{
                  height: 50,
                  width: 50,
                  background: `url(${marker})`,
                  backgroundSize: 'cover',
                }}
              />
            </Marker>
          ))}

        {/* popup */}
        {popup && (
          <Popup
            anchor="top"
            latitude={parseFloat(popup.latitude)}
            longitude={parseFloat(popup.longitude)}
            closeOnClick={false}
            onClose={() => setPopup(null)}
          >
            <img
              style={{
                padding: '0.4em',
                height: 200,
                width: 200,
                objectFit: 'cover',
              }}
              src={event.image || popup.image || placeholderImage}
              alt="not found"
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'MontserratBold',
                  fontSize: 17,
                }}
              >
                {popup.title}
              </div>

              <button
                style={{
                  padding: 10,
                  border: 0,
                  outline: 0,
                  width: 40,
                  cursor: 'pointer',
                }}
                type="button"
                className="delBtn"
                onClick={() => handleDeletePin(popup._id)}
              >
                {/* <DeleteIcon className={classes.deleteIcon} /> */}x
              </button>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = ({ pins, events }) => ({
  draft: pins.draft,
  currentPin: pins.currentPin,
  currentEventPins: pins.currentEventPins,
  event: events.currentEvent,
});

export default connect(
  mapStateToProps,
  { createDraftPin, updateDraftPinLocation, setCurrentPin, deletePin }
)(Map);
