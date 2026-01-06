import { createClient } from '@supabase/supabase-js';

// Estas variables deberás configurarlas desde tu dashboard de Supabase
// 1. Ve a https://supabase.com y crea un proyecto
// 2. Copia la URL y la anon key desde Settings > API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
