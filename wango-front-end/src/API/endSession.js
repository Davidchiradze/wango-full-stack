const endSession = async (id) => {
  const response = await fetch(
    `http://localhost:9000/cities/parking-session/${id}/end`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};

export default endSession;
