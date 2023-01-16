import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setStations } from "../redux/actions/stationActions";
import List from "./List";
import Map from "./Map";

const StationListing = () => {
  const stations = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchStations = async () => {
    const response = await axios
      .get("http://api.citybik.es/v2/networks/velo-antwerpen")
      .catch((error) => {
        console.log("Error: ", error);
      });
    dispatch(setStations(response.data.network.stations));
  };

  useEffect(() => {
    fetchStations();
  }, []);

  //  console.log("StationAPI: ", stations);

  return (
    <div className="main-container">
      <div className="map-container">
        <Map />
      </div>
      <div className="list-container">
        <List />
      </div>
    </div>
  );
};

export default StationListing;
