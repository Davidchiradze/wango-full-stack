const getParkingSpaces = async (cityId) => {
  const response = await fetch(
    `http://localhost:9000/cities/parking-spaces/${cityId}`
  );
  const data = await response.json();
  return data.data;
};

export default getParkingSpaces;
