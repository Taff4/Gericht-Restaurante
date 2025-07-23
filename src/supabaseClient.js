import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tfwigqcstiekdflgaryj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmd2lncWNzdGlla2RmbGdhcnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMTkwNzEsImV4cCI6MjA2ODY5NTA3MX0.s_f8uF1TxHyOeipmxa1byw387xf5WgU72sqno4VAx4A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
