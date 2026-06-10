-- Apply to the idigdata-app Supabase project, not the website's reserved Supabase project.
-- Purpose: store server-side entrance/door-knock intelligence from idigdata.com.

create table if not exists public.site_hits (
  id uuid primary key default gen_random_uuid(),
  occurred_at timestamptz not null default now(),
  source text not null default 'idigdata-door-knock',
  path text not null,
  referrer text,
  user_agent text,
  anon_session_id text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  traffic_class text,
  source_kind text,
  source_channel text,
  source_medium text,
  source_campaign text,
  attribution_confidence text,
  source_refs jsonb not null default '[]'::jsonb,
  is_internal boolean not null default false,
  is_bot boolean not null default false,
  is_asset boolean not null default false,
  buyer_signal boolean not null default false,
  request_method text,
  landing_url text,
  query text,
  host text,
  protocol text,
  client_ip text,
  client_ip_chain text,
  geo_country text,
  geo_region text,
  geo_city text,
  geo_latitude text,
  geo_longitude text,
  accept_language text,
  sec_fetch_site text,
  sec_fetch_mode text,
  sec_fetch_dest text,
  request_id text,
  headers_json jsonb not null default '{}'::jsonb
);

create index if not exists site_hits_occurred_at_idx
  on public.site_hits (occurred_at desc);

create index if not exists site_hits_source_kind_idx
  on public.site_hits (source_kind, occurred_at desc);

create index if not exists site_hits_traffic_class_idx
  on public.site_hits (traffic_class, occurred_at desc);

create index if not exists site_hits_referrer_idx
  on public.site_hits (referrer)
  where referrer is not null;

alter table public.site_hits enable row level security;

grant insert on public.site_hits to anon, authenticated;

drop policy if exists "website can insert site hits" on public.site_hits;
create policy "website can insert site hits"
  on public.site_hits
  for insert
  to anon, authenticated
  with check (source = 'idigdata-door-knock');
