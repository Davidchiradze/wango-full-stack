import React from "react";
import { useCity } from "../context/CityContext";

const ParkingSelector = () => {
  const { parkingSpaces, setSelectedParkingSpace, selectedParkingSpace } =
    useCity();

  const handleSelectChange = (e) => {
    setSelectedParkingSpace(e.target.value);
  };
  return (
    <select
      name=""
      className="form-control wide"
      id="inputParkingAreas"
      value={selectedParkingSpace}
      onChange={handleSelectChange}
    >
      <option>Choose parking area</option>
      {parkingSpaces.map((parkingSpace) => (
        <option key={parkingSpace.id} value={parkingSpace.id}>
          {parkingSpace.parkingName}
        </option>
      ))}
    </select>
  );
};

export default ParkingSelector;
