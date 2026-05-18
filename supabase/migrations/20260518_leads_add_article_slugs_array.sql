-- dispatch-071: extend leads table for multi-article request payloads.
--
-- The /articles index modal allows requesters to select 1, 2, or 3 articles
-- in a single submission. This migration adds article_slugs TEXT[] to carry
-- the multi-select. The existing article_slug TEXT column stays for backward
-- compatibility with per-article landing-page submissions (single slug).
--
-- Backward compat: API layer normalizes single-article submissions into a
-- one-element article_slugs array as well as populating article_slug. New
-- queries should prefer article_slugs.

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS article_slugs TEXT[];

CREATE INDEX IF NOT EXISTS leads_article_slugs_idx
  ON public.leads USING GIN (article_slugs)
  WHERE article_slugs IS NOT NULL;

COMMENT ON COLUMN public.leads.article_slugs IS
  'When request_type = article_request, the slugs of the articles being requested (1-3 entries). Supersedes single article_slug column for new submissions.';
