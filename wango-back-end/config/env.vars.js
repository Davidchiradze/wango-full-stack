import dotenv from "dotenv";
dotenv.config();

export const ENV_VARS = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
};
