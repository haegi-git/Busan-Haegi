// src/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xvznxcwudllyevvetxzf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2em54Y3d1ZGxseWV2dmV0eHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxNjc1NDcsImV4cCI6MjAzNTc0MzU0N30.2aiazv3rQehzeDQwPatZe2rXngdCg8IAZEYmtbJSH-s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
