import React, { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';

import pinIcon from '../../assets/icons/pin.svg';

const Map = () => {
  const [map] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 13,
  });
  const [viewport, setViewport] = useState(map);
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    getUserPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserPosition = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        setViewport({ ...viewport, latitude, longitude });
        setUserPosition({ latitude, longitude });
      });
    }
  };
  // philips-run-line ,mets a ganar ,bravos a ganar, pirates a ganar x 5000

  return (
    <ReactMapGL
      width="400px"
      height="400px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoidGhpZW5qcyIsImEiOiJjanRhbGswencwY2FqM3lvYmFha2t3Zm8zIn0.jnoLsme-neGURWbBd-C5iw"
      onViewportChange={newViewport => setViewport(newViewport)}
      // onClick={handleMapClick}
      {...viewport}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, margin: '1em' }}>
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
          <img src={pinIcon} alt="404" />
        </Marker>
      )}
    </ReactMapGL>
  );
};

export default Map;
