import React from "react";
import { useSelector } from "react-redux";

const List = () => {
  const stations = useSelector((state) => state.allStations.stations);

  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <select onChange={onChange}>
        <option>--Listview--</option>
        {stations.map((station) => (
          <option key={station.id}>
            {/* {console.log(station.latitude, station.longitude)} */}
            {station.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default List;
