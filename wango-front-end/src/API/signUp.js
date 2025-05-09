const signUp = async (name, email, plateNumber, address) => {
  const response = await fetch("http://localhost:9000/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName: name, email, plateNumber, address }),
  });
  const data = await response.json();
  return data;
};

export default signUp;
