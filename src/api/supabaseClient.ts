import { createClient, SupabaseClient } from "@supabase/supabase-js";

const APP_SUPABASE_URL:string = "https://hadlmawwdetqyspyjsaf.supabase.co";
const APP_SUPABASE_KEY:string ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZGxtYXd3ZGV0cXlzcHlqc2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjMxNzAsImV4cCI6MjA4MDIzOTE3MH0.A3MLnK-2vMdq9xZF0ST-PiBGATSjTVHohCQtUeaESt4";

const supabase:SupabaseClient = createClient(APP_SUPABASE_URL, APP_SUPABASE_KEY);

export default supabase;


