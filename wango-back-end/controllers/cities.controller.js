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
  const { id, endDate } = req.body;
  const { data: initialData, error: initialError } = await supabase
    .from("parking-sessions")
    .select("*, parking-space(*, parking-prices(*))")
    .eq("id", id)
    .single();

  if (initialError) {
    return res.status(500).json({ error: initialError.message });
  }
  const price = calculatePrice({ ...initialData, endDate });

  const { data, error } = await supabase
    .from("parking-sessions")
    .update({ endDate: endDate, price: price })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res
    .status(200)
    .json({ message: "Session ended", status: "success", data, price });
};

const calculatePrice = (data) => {
  console.log("🚀 ~ calculatePrice ~ data:", data);

  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  const pricingRules = data["parking-space"]["parking-prices"];

  const durationMs = endDate - startDate;
  const durationHours = durationMs / (1000 * 60 * 60);

  if (pricingRules.length === 1) {
    return Math.ceil(durationHours) * pricingRules[0].price;
  }

  let totalPrice = 0;
  let currentTime = new Date(startDate);

  while (currentTime < endDate) {
    const timeString = currentTime.toTimeString().substring(0, 8);

    const applicableRule = pricingRules.find((rule) => {
      return isTimeInRange(timeString, rule.startTime, rule.endTime);
    });

    if (!applicableRule) {
      console.error("No applicable pricing rule found for time:", timeString);
      totalPrice += pricingRules[0].price;
    } else {
      totalPrice += applicableRule.price;
    }

    currentTime.setTime(currentTime.getTime() + 60 * 60 * 1000);
  }

  return Math.round(totalPrice);
};

const isTimeInRange = (timeToCheck, startTime, endTime) => {
  const getTimeInSeconds = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const checkSeconds = getTimeInSeconds(timeToCheck);
  const startSeconds = getTimeInSeconds(startTime);
  const endSeconds = getTimeInSeconds(endTime);

  if (startSeconds > endSeconds) {
    return checkSeconds >= startSeconds || checkSeconds <= endSeconds;
  }
  return checkSeconds >= startSeconds && checkSeconds <= endSeconds;
};
