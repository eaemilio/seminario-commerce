import { createClient } from '@supabase/supabase-js';

export function getSupabase() {
    // if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_KEY) {
    //     throw new Error('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_KEY env variables');
    // }
    return createClient("https://zzmdfwuekwjsudglcuxe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6bWRmd3Vla3dqc3VkZ2xjdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIwNDc4ODYsImV4cCI6MTk2NzYyMzg4Nn0.5XpRjpe4ZdN1VOzuoW8cGqG1jBusUd7FAUuA-MNGTBo");
}

export const supabase = getSupabase();

