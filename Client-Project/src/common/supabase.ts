
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fsnavrdsbbyrbmtaddyb.supabase.co'
const supabaseKey = import.meta.env.VITE_API_Key 
const supabase = createClient(supabaseUrl, supabaseKey)
console.log(supabaseKey);

export default supabase