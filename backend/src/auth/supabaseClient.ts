// IMPORTANT 
// This is used to test the database as this uses the client-side public key
// So when we input through this it will be as if we were a user
// Use this for unit tests and other tests

// DO NOT USE SECRET KEY/DEVELOPER KEY
// IT CANNOT BE MADE PUBLIC. SECRET KEY/DEVELOPER KEY HAS FULL ACCESS


import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://gfuvnshwcadipxvrcsew.supabase.co' // API URL
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmdXZuc2h3Y2FkaXB4dnJjc2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMzA1NDcsImV4cCI6MjA1MDkwNjU0N30.FPTJWVnCUJVwJFueDN9VfCZGuZof44O-jNgIBOz0EmU'; // Public key/ Anon Key

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
