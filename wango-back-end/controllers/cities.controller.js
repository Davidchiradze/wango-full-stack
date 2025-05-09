import supabase from "../utils/supabase.js";

export const getCities = async (req, res) => {
  const { data, error } = await supabase.from("cities").select("*");

  if (error) {
    res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: "Cities fetched", status: "success", data });
};

export const getCityParkingSpaces = async (req, res) => {
  const { cityId } = req.params;
  const { data, error } = await supabase
    .from("parking_spaces")
    .select("*")
    .eq("cityId", cityId);

  if (error) {
    res.status(500).json({ error: error.message });
  }

  res
    .status(200)
    .json({ message: "Parking spaces fetched", status: "success", data });
};

// export const getPrices = async (req, res) => {
//   const { startTime } = req.params;
//   const { data, error } = await supabase
//     .from("prices")
//     .select("*")
//     .eq("startTime", startTime);
// };
