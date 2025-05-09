import supabase from "../utils/supabase.js";

export const getCities = async (req, res) => {
  const { data, error } = await supabase.from("cities").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Cities fetched", status: "success", data });
};

export const getCityParkingSpaces = async (req, res) => {
  const { cityId } = req.params;
  const { data, error } = await supabase
    .from("parking-space")
    .select("*")
    .eq("cityId", cityId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res
    .status(200)
    .json({ message: "Parking spaces fetched", status: "success", data });
};

export const newSession = async (req, res) => {
  const { userId, parkingId, startTime } = req.body;

  const { data, error } = await supabase
    .from("parking-sessions")
    .insert({ userId: userId, parkingId: parkingId, startDate: startTime })
    .select("*")
    .single();

  if (error) {
    console.log("🚀 ~ newSession ~ error:", error);
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Session created", status: "success", data });
};

export const getSession = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("parking-sessions")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Session fetched", status: "success", data });
};

export const endSession = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("parking-sessions")
    .update({ endDate: new Date().toISOString() })
    .eq("id", id)
    .select("*, parking-space(*, parking-prices(*))")
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }
};
