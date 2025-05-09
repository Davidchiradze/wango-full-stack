import React, { createContext, useState, useContext, useEffect } from "react";
import getCities from "../API/getCities";
import getParkingSpaces from "../API/getParkingSpaces";

// Create the context
const CityContext = createContext();

// Create a provider component
export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [parkingSpaces, setParkingSpaces] = useState([]);
  const [selectedParkingSpace, setSelectedParkingSpace] = useState("");
  useEffect(() => {
    getCities().then((data) => setCities(data));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      getParkingSpaces(selectedCity).then((data) => setParkingSpaces(data));
    }
  }, [selectedCity]);

  const value = {
    cities,
    setCities,
    selectedCity,
    setSelectedCity,
    parkingSpaces,
    selectedParkingSpace,
    setSelectedParkingSpace,
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};
// Custom hook for using the context
export const useCity = () => {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};

export default CityContext;
