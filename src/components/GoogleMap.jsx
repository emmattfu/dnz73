import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 51.515954,
  lng: 31.314576,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MyGoogleMap = () => {
  const [selected, setSelected] = React.useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading map";
  if (!isLoaded) return "Loading map";

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      >
        <Marker
          position={center}
          onClick={() => setSelected(true)}
        />
      </GoogleMap>
    </>
  );
};

export default MyGoogleMap;
