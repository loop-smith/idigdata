import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  decodeAttributionCookie,
  encodeAttributionCookie,
  mergeAttributionSearch,
  parseAttributionSearch,
} from "./attribution";

describe("attribution", () => {
  it("parses utm + gclid", () => {
    const parsed = parseAttributionSearch(
      "?utm_source=linkedin&utm_medium=social&gclid=xyz",
    );
    assert.equal(parsed.utm_source, "linkedin");
    assert.equal(parsed.gclid, "xyz");
  });

  it("round-trips cookie payload", () => {
    const payload = {
      utm_source: "linkedin",
      utm_medium: "social",
      utm_campaign: "cio",
      utm_term: null,
      utm_content: null,
      gclid: null,
      landing_path: "/",
      referrer_host: "linkedin.com",
      captured_at: "2026-07-28T00:00:00.000Z",
    };
    const decoded = decodeAttributionCookie(encodeAttributionCookie(payload));
    assert.deepEqual(decoded, payload);
  });

  it("fills live search gaps from cookie", () => {
    const merged = mergeAttributionSearch(
      "",
      {
        utm_source: "linkedin",
        utm_medium: "social",
        utm_campaign: null,
        utm_term: null,
        utm_content: null,
        gclid: null,
        landing_path: "/",
        referrer_host: null,
        captured_at: "2026-07-28T00:00:00.000Z",
      },
    );
    assert.ok(merged?.includes("utm_source=linkedin"));
  });
});
