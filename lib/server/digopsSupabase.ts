import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * DigOps (operations) Supabase bridge from the public website.
 * Prefer DIGOPS_SUPABASE_*; legacy IDIGDATA_APP_* names are not read.
 */
export function getDigOpsSupabase(): SupabaseClient | null {
  const url = process.env.DIGOPS_SUPABASE_URL;
  const serviceRoleKey = process.env.DIGOPS_SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.DIGOPS_SUPABASE_ANON_KEY;
  const key = serviceRoleKey ?? anonKey;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function getDigOpsSupabaseForContact(): {
  canReturnInsertedId: boolean;
  client: SupabaseClient;
} | null {
  const url = process.env.DIGOPS_SUPABASE_URL;
  const serviceRoleKey = process.env.DIGOPS_SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.DIGOPS_SUPABASE_ANON_KEY;
  const key = serviceRoleKey ?? anonKey;

  if (!url || !key) return null;

  return {
    canReturnInsertedId: Boolean(serviceRoleKey),
    client: createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    }),
  };
}
