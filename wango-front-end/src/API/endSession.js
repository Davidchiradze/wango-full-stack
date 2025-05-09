import moment from "moment";

const endSession = async (id) => {
  const response = await fetch(
    `http://localhost:9000/cities/parking-session/end`,
    {
      method: "POST",
      body: JSON.stringify({ id, endDate: moment().format("HH:mm") }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export default endSession;
