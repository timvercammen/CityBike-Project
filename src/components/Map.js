import React from "react";
import { TileLayer, Marker, MapContainer, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import "../css/Map.scss";

const Map = () => {
  const position = [51.21782, 4.42065];
  const markers = useSelector((state) => state.allStations.stations);
  return (
    <>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker
            className="marker"
            key={marker.id}
            position={[marker.latitude, marker.longitude]}
          >
            <Popup>
              <div className="tooltip">
                <h4>{marker.name}</h4>
                <div className="tooltip-icon">
                  <img
                    className="bike-icon"
                    src="../../images/bike-icon.png"
                    alt="Aantal fietsen: "
                  />
                  <p>{marker.free_bikes}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
