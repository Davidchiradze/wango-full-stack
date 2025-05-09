import React, { useEffect, useState } from "react";
import getSession from "../API/getSession";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import endSession from "../API/endSession";
import moment from "moment";

const ParkingSession = () => {
  const { id } = useParams();
  const [session, setSession] = useState(null);
  console.log("🚀 ~ ParkingSession ~ session:", session);
  const isFinished = session?.endDate;
  const [elapsedTime, setElapsedTime] = useState(null);

  useEffect(() => {
    getSession(id).then((data) => {
      setSession(data);
    });
  }, [id]);

  const handleEndSession = () => {
    endSession(id).then((data) => {
      console.log("🚀 ~ handleEndSession ~ data:", data);
      setSession((prev) => ({ ...prev, ...data.data }));
    });
  };

  useEffect(() => {
    if (!session) return;

    // Initial calculation
    const calculateElapsedTime = () => {
      // Parse the ISO string date
      const startMoment = moment(session.startDate);
      const currentMoment = moment();
      const duration = moment.duration(currentMoment.diff(startMoment));

      const durationHours = Math.floor(duration.asHours());
      const durationMinutes = Math.floor(duration.asMinutes()) % 60;
      const durationSeconds = Math.floor(duration.asSeconds()) % 60;

      return `${durationHours}h ${durationMinutes}m ${durationSeconds}s`;
    };

    setElapsedTime(calculateElapsedTime());

    const timerId = setInterval(() => {
      !isFinished && setElapsedTime(calculateElapsedTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, [session, isFinished]);

  if (!session) return <div>Loading...</div>;

  return (
    <div>
      <h1>Parking Session {id}</h1>
      <p>Start Time: {moment(session.startDate).format("DD/MM/YYYY HH:mm")}</p>
      {isFinished && (
        <p>End Time: {moment(session.endDate).format("DD/MM/YYYY HH:mm")}</p>
      )}

      <p>Elapsed Time: {elapsedTime}</p>
      {isFinished && <p>Total Cost: {session.price}</p>}
      {!isFinished && <button onClick={handleEndSession}>End Session</button>}
    </div>
  );
};

export default ParkingSession;
