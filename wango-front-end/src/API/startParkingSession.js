import moment from "moment";

const startParkingSession = async (selectedParkingSpace, userId) => {
  const response = await fetch("http://localhost:9000/cities/new-session", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      parkingId: selectedParkingSpace,
      startTime: moment().format("HH:mm"), // 24-hour format
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

export default startParkingSession;
