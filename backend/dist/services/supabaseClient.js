"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseUrl = 'https://gfuvnshwcadipxvrcsew.supabase.co'; // API URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmdXZuc2h3Y2FkaXB4dnJjc2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMzA1NDcsImV4cCI6MjA1MDkwNjU0N30.FPTJWVnCUJVwJFueDN9VfCZGuZof44O-jNgIBOz0EmU'; // Public key/ Anon Key
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
exports.default = supabase;
