import React, { useEffect, useState } from "react";
import getSession from "../API/getSession";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import endSession from "../API/endSession";

const ParkingSession = () => {
  const { id } = useParams();
  const [session, setSession] = useState(null);

  useEffect(() => {
    getSession(id).then((data) => {
      setSession(data);
    });
  }, [id]);

  const handleEndSession = () => {
    endSession(id).then((data) => {
      console.log("🚀 ~ endSession ~ data:", data);
    });
  };
  return (
    <div>
      adsadada
      {/* <h1>Parking Session {id}</h1>
      <p>Start Time: {startTime}</p>
      <p>End Time: {endTime}</p>
      <p>Total Time: {totalTime}</p>
      <p>Total Cost: {totalCost}</p> */}
      <button onClick={handleEndSession}>End Session</button>
    </div>
  );
};

export default ParkingSession;
