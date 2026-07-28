import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type DigOpsClients = {
  /** Prefer anon for inserts (RLS insert-only). */
  write: SupabaseClient;
  /** Service role only when returning inserted row ids. */
  privileged: SupabaseClient | null;
};

let cached: DigOpsClients | null | undefined;

/**
 * DigOps (operations) Supabase bridge from the public website.
 * Prefer DIGOPS_SUPABASE_*; legacy IDIGDATA_APP_* names are not read.
 *
 * Least privilege: beacon + contact inserts use the anon key.
 * Service role is optional and only used when contact needs `.select("id")`.
 */
export function getDigOpsSupabase(): SupabaseClient | null {
  return getDigOpsClients()?.write ?? null;
}

export function getDigOpsSupabaseForContact(): {
  canReturnInsertedId: boolean;
  client: SupabaseClient;
} | null {
  const clients = getDigOpsClients();
  if (!clients) return null;
  if (clients.privileged) {
    return { canReturnInsertedId: true, client: clients.privileged };
  }
  return { canReturnInsertedId: false, client: clients.write };
}

function getDigOpsClients(): DigOpsClients | null {
  if (cached !== undefined) return cached;

  const url = process.env.DIGOPS_SUPABASE_URL;
  const anonKey = process.env.DIGOPS_SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.DIGOPS_SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !anonKey) {
    // Fallback: service role alone (legacy Vercel configs) — log once via missing anon.
    if (url && serviceRoleKey) {
      console.warn(
        "digopsSupabase: DIGOPS_SUPABASE_ANON_KEY missing; falling back to service role for writes",
      );
      const privileged = createClient(url, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
      cached = { write: privileged, privileged };
      return cached;
    }
    cached = null;
    return null;
  }

  const write = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const privileged = serviceRoleKey
    ? createClient(url, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

  cached = { write, privileged };
  return cached;
}
