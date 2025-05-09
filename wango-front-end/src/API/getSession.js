const getSession = async (id) => {
  const response = await fetch(
    `http://localhost:9000/cities/parking-session/${id}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data.data;
};

export default getSession;
