import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tbwumxpmjalzcflabisk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRid3VteHBtamFsemNmbGFiaXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDUwMTEsImV4cCI6MjAwOTc4MTAxMX0.CyiW-oR6E91zNau-wr47NV8TpH0SDk2DGeo2vLpgO_8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
