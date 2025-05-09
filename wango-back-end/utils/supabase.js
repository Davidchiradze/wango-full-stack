import { createClient } from "@supabase/supabase-js";
import { ENV_VARS } from "../config/env.vars.js";
// Ensure environment variables are loaded

const supabase = createClient(ENV_VARS.SUPABASE_URL, ENV_VARS.SUPABASE_KEY);

export default supabase;
