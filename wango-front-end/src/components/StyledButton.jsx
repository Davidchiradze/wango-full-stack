import React from "react";
import { useCity } from "../context/CityContext";
import startParkingSession from "../API/startParkingSession";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const StyledButton = () => {
  const { selectedParkingSpace } = useCity();
  const userId = localStorage.getItem("userId");
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await startParkingSession(selectedParkingSpace, userId);
    history.push(`/parking-session/${response.data.id}`);
  };
  return (
    <button type="submit" className="btn " onClick={handleClick}>
      pay with Wango
    </button>
  );
};

export default StyledButton;
