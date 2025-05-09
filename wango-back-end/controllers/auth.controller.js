import supabase from "../utils/supabase.js";

export const signUp = async (req, res) => {
  const { email, address, fullName, plateNumber } = req.body;

  const { data, error } = await supabase.from("users").insert({
    email,
    address,
    fullName,
    plateNumber,
  });

  if (error) {
    res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Sign Up", status: "success" });
};

export const login = async (req, res) => {
  console.log(req.body);
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", req.body.email)
    .single();

  if (!data || error) {
    res.status(404).json({ error: "User not found" });
  }

  if (data.plateNumber !== req.body.plateNumber) {
    res.status(404).json({ error: "User not found" });
  }

  res.status(200).json({ message: "User found", status: "success" });
};
