-- Apply to the DigOps Supabase project (operations), not a website-reserved project.
-- Canonical migration also lives at:
--   ../operations/supabase/migrations/20260724213000_digops_website_bridge.sql
-- This file is the site-side contract mirror for door-knock / pageviews.

-- Prefer applying the operations migration via Supabase MCP / CLI.
-- Kept here so website agents can see the sink contract without opening ops.

select 'Use operations migration 20260724213000_digops_website_bridge.sql'::text as note;
