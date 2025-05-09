const getCities = async () => {
  const response = await fetch("http://localhost:9000/cities", {
    method: "GET",
  });
  const data = await response.json();
  return data.data;
};

export default getCities;
