-- dispatch-019: extend leads table for IP-gated article-request routing.
--
-- This file is the migration plan; apply it MANUALLY against the leads
-- Supabase project (idigdata-app, project_ref dvjrmozeoakmcaccqqld) once the
-- v2-overhaul branch is ready to deploy. Until applied, /api/contact route
-- continues using the metadata-prefix pattern in `message` for forward-compat.
--
-- request_type: 'general' (contact form) or 'article_request' (gated landing).
-- article_slug: when request_type = 'article_request', the slug requested.

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS request_type TEXT NOT NULL DEFAULT 'general';

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS article_slug TEXT;

CREATE INDEX IF NOT EXISTS leads_request_type_idx
  ON public.leads (request_type);

CREATE INDEX IF NOT EXISTS leads_article_slug_idx
  ON public.leads (article_slug)
  WHERE article_slug IS NOT NULL;

COMMENT ON COLUMN public.leads.request_type IS
  'Request type: general (contact form) or article_request (gated article landing page).';

COMMENT ON COLUMN public.leads.article_slug IS
  'When request_type = article_request, the slug of the article being requested.';
