import posthog from "posthog-js";

type TrackProps = Record<string, string | number | boolean | undefined | null>;

export function track(event: string, props?: TrackProps) {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`[track] ${event}`, props ?? {});
  }

  if (posthog.__loaded) {
    posthog.capture(event, props ?? {});
  }
}
