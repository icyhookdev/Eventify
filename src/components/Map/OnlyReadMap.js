import React, { useState, useRef, useEffect } from 'react';

import { connect } from 'react-redux';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import marker from '../../assets/img/marker.png';
import placeholderImage from '../../assets/img/placeholder.png';

const OnlyReadMap = ({ event, fullWidth }) => {
  const [map] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 13,
  });
  const mapRef = useRef(null);

  const [viewport, setViewport] = useState(map);
  const [mainEventPosition, setMainEventPosition] = useState(null);
  const [mapWidth, setMapWidth] = useState('400px');
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    getEventPosition();
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

  const handleSelectPin = pin => {
    console.log('click');
    setPopup(pin);
    // setCurrentPin(pin);
    console.log(pin);
  };

  const getEventPosition = () => {
    if (event && event.pins[0]) {
      const { latitude, longitude } = event.pins[0];
      const coords = {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };

      setViewport({ ...viewport, ...coords });
      setMainEventPosition(coords);
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        position: 'relative',
      }}
    >
      <ReactMapGL
        ref={mapRef}
        width="100%"
        height="400px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoidGhpZW5qcyIsImEiOiJjanRhbGswencwY2FqM3lvYmFha2t3Zm8zIn0.jnoLsme-neGURWbBd-C5iw"
        onViewportChange={newViewport => setViewport(newViewport)}
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
        {mainEventPosition && (
          <Marker
            latitude={mainEventPosition.latitude}
            longitude={mainEventPosition.longitude}
            offsetLeft={-19}
            offsetTop={-37}
          />
        )}

        {/* Events pin */}
        {event &&
          event.pins.map(pin => (
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
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};
const mapStateToProps = ({ pins, events }) => ({
  currentPin: pins.currentPin,
  currentEventPins: pins.currentEventPins,
  event: events.currentEvent,
});

export default connect(
  mapStateToProps,
  {}
)(OnlyReadMap);
