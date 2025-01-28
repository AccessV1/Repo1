// IMPORTANT 
// This is used to test the database as this uses the client-side public key
// So when we input through this it will be as if we were a user
// Use this for unit tests and other tests

// DO NOT USE SECRET KEY/DEVELOPER KEY
// IT CANNOT BE MADE PUBLIC. SECRET KEY/DEVELOPER KEY HAS FULL ACCESS


import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = ' // API URL
const supabaseKey: string = '

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
