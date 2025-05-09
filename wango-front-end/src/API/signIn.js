const signIn = async (email, plateNumber) => {
  const response = await fetch("http://localhost:9000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, plateNumber }),
  });
  const data = await response.json();
  return data;
};

export default signIn;
