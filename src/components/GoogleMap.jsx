import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import icon from "../assets/school.png";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const key = "AIzaSyDKebZ7QCuikDje6uhpogdL49CtnOBgNXs"

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
    googleMapsApiKey: key,
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
          icon={{
            url: icon,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15)
          }}
          onClick={() => setSelected(true)}
        />
      </GoogleMap>
    </>
  );
};

export default MyGoogleMap;
