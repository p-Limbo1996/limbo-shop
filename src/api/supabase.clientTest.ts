import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabase: SupabaseClient = createClient("url", "key")

export default supabase