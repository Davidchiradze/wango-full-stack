import React from "react";
import { useCity } from "../context/CityContext";

const CitySelector = () => {
  const { cities, setSelectedCity, selectedCity } = useCity();

  const handleSelectChange = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <select
      name=""
      className="form-control wide"
      id="inputCities"
      value={selectedCity}
      onChange={handleSelectChange}
    >
      <option>Choose city</option>
      {cities.map((city) => (
        <option key={city.id} value={city.id}>
          {city.cityName}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
